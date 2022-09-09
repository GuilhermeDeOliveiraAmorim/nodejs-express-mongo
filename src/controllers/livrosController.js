import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        livros
            .find()
            .populate("autor")
            .populate("editora")
            .exec((err, livros) => {
                res.status(200).json(livros);
            });
    };

    static cadastrarLivro = (req, res) => {
        const livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - falha`,
                });
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    };

    static atualizarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: `Atualizado` });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;
        livros
            .findById(id)
            .populate("autor", "nome")
            .populate("editora", "nome")
            .exec((err, livros) => {
                if (err) {
                    res.status(400).send({
                        message: `${err.message} - Não encontrado`,
                    });
                } else {
                    res.status(200).send(livros);
                }
            });
    };

    static excluirLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
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

    static listarLivroPorEditora = (req, res) => {
        const editora = req.params.editora;
        livros.find({ editora: editora }, {}, (err, livros) => {
            res.status(200).send(livros);
        });
    };
}

export default LivroController;
