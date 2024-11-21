import { v4 as uuid } from 'uuid';
import { validateReceipt } from '../helpers/validateReceipt.js';
import { calculatePoints } from '../helpers/calculatePoints.js';
import { writeToDatastore } from '../services/writeToDatastore.js';

const processReceipts = async (req, res) => {
    const receipt = req.body;
    const id = uuid();

    const validateRes = validateReceipt(receipt);
    if (validateRes.isValid) {
        const points = calculatePoints(receipt);
        const result = writeToDatastore({
            id,
            points,
            receipt
        });
    
        if (result.status === "success") {
            return res.status(200).json({
                "id": id
            });
        } else if (result.status === "error") {
            return res.status(400).json({
                result
            })
        }
    } else {
        return res.status(400).json({
            message: validateRes.message
        });
    }
}; 

export { processReceipts };
