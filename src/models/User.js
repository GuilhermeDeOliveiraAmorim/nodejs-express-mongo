import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: { type: String },
        login: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);

const users = mongoose.model("users", userSchema);

export default users;
