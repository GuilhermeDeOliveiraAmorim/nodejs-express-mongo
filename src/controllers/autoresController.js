import autores from "../models/Autor.js";

class autoresController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        });
    };

    static cadastrarAutor = (req, res) => {
        const autor = new autores(req.body);
        autor.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - falha`,
                });
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    };

    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: `Atualizado` });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Não encontrado`,
                });
            } else {
                res.status(200).send(autores);
            }
        });
    };

    static excluirAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({
                    message: `Removido`,
                });
            } else {
                res.status(500).send({
                    message: `${err.message} - Não encontrado`,
                });
            }
        });
    };
}

export default autoresController;
