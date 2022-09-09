import mongoose from "mongoose";
import * as dotenv from "dotenv";

const urlConnection =
    "mongodb+srv://" +
    dotenv.config().parsed.DB_HOST +
    ":" +
    dotenv.config().parsed.SECRET_KEY +
    "@" +
    dotenv.config().parsed.DB_CLUSTER +
    "/" +
    dotenv.config().parsed.DB_DATA;

mongoose.connect(urlConnection);

const db = mongoose.connection;

export default db;
