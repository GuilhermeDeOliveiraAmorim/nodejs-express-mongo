import users from "../models/User.js";

class usersController {
    static getUser = (req, res) => {
        const id = req.params.id;
        users.findById(id, (err, users) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Not found`,
                });
            } else {
                res.status(200).send(users);
            }
        });
    };

    static getUsers = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(users);
        });
    };

    static addUser = (req, res) => {
        const user = new autores(req.body);
        user.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - error`,
                });
            } else {
                res.status(201).send(user.toJSON());
            }
        });
    };

    static updateUser = (req, res) => {
        const id = req.params.id;
        users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: `Updated` });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static deleteUser = (req, res) => {
        const id = req.params.id;
        users.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({
                    message: `Deleted`,
                });
            } else {
                res.status(500).send({
                    message: `${err.message} - Not found`,
                });
            }
        });
    };
}

export default usersController;
