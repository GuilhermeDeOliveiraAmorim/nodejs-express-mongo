import mongoose from "mongoose";

const DB_HOST = "guilhermeamorim";
const SECRET_KEY = "rJTUXt7iKn5rr!6";
const DB_CLUSTER = "cluster0.5zfqrm3.mongodb.net";
const DB_DATA = "alura-node";

const urlConnection =
    "mongodb+srv://" +
    DB_HOST +
    ":" +
    SECRET_KEY +
    "@" +
    DB_CLUSTER +
    "/" +
    DB_DATA;

mongoose.connect(urlConnection);

const db = mongoose.connection;

export default db;
