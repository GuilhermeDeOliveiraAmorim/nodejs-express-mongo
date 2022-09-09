import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
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
}

export default LivroController;
