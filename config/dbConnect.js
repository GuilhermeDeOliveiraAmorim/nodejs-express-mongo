import mongoose from "mongoose";

const urlConnection =
    "mongodb+srv://" +
    process.env.DB_HOST +
    ":" +
    process.env.SECRET_KEY +
    "@" +
    process.env.DB_CLUSTER +
    "/" +
    process.env.DB_DATA;

mongoose.connect(urlConnection);

const db = mongoose.connection;

export default db;
