import { inMemoryDatabase } from "../datastores/inMemoryDatastore.js";

const retrieveFromDatastore = (id) => {
    let data;

    data = inMemoryDatabase[id];
    return data;
};

export { retrieveFromDatastore };
