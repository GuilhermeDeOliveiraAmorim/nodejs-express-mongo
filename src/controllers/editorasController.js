import editoras from "../models/Editora.js";

class editorasController {
    static listarEditoras = (req, res) => {
        editoras.find((err, editoras) => {
            res.status(200).json(editoras);
        });
    };

    static cadastrarEditora = (req, res) => {
        const editora = new editoras(req.body);
        editora.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - falha`,
                });
            } else {
                res.status(201).send(editora.toJSON());
            }
        });
    };

    static atualizarEditora = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: `Atualizado` });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static listarEditoraPorId = (req, res) => {
        const id = req.params.id;
        editoras.findById(id, (err, editoras) => {
            if (err) {
                res.status(400).send({
                    message: `${err.message} - Não encontrado`,
                });
            } else {
                res.status(200).send(editoras);
            }
        });
    };

    static excluirEditora = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndDelete(id, (err) => {
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

export default editorasController;
