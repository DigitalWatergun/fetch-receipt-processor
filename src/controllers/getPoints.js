import { retrieveFromDatastore } from "../services/retrieveFromDatastore.js";

const getPoints = async (req, res) => {
    const id = req.params.id;

    const data = retrieveFromDatastore(id);

    if (data) {
        return res.status(200).json({
            points: data.points
        });
    } else {
        return res.status(404).json({
            message: 'No receipt found for that id'
        });
    }
};

export { getPoints };
