import express from "express";
import UsersController from "../controllers/usersController.js";

const router = express.Router();

router
    .get("/user/:id", UsersController.getUser)
    .get("/users", UsersController.getUsers)
    .post("/user", UsersController.addUser)
    .put("/user/:id", UsersController.updateUser)
    .delete("/user/:id", UsersController.deleteUser);

export default router;
