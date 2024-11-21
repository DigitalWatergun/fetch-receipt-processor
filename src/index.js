import express from "express";
import { getPoints } from "./controllers/getPoints.js";
import { processReceipts } from "./controllers/processReceipts.js";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Fetch Rewards Receipt Processor API running.");
});

app.get('/receipts/:id/points', getPoints);
app.post('/receipts/process', processReceipts);

app.listen(3000, () => {
    console.log("Fetch Rewards Receipt Processor API running.");
});
