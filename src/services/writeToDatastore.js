import { inMemoryDatabase } from "../datastores/inMemoryDatastore.js";

const writeToDatastore = (data) => {
    try {
        inMemoryDatabase[data.id] = {
            "id": data.id,
            "points": data.points,
            "receipt": data.receipt
        };

        return { status: "success" };
    } catch (err) {
        return {
            status: "error",
            message: "Error writing to datastore",
            error: err
        };
    }
};

export { writeToDatastore };
