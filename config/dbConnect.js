import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://guilhermeamorim:rJTUXt7iKn5rr!6@cluster0.5zfqrm3.mongodb.net/alura-node"
);

const db = mongoose.connection;

export default db;
