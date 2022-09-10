import express from "express";
import usersController from "../controllers/usersController.js";

const router = express.Router();

router
    .get("/user/:id", usersController.getUser)
    .get("/users", usersController.getUsers)
    .post("/user", usersController.addUser)
    .put("/user/:id", usersController.updateUser)
    .delete("/user/:id", usersController.deleteUser);

export default router;
