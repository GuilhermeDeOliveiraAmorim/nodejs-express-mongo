import express from "express";
import db from "../config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro na conexão"));
db.once("open", () => {
    console.log("Database connection established");
});

const app = express();

app.use(express.json());

app.get("/livros/:id", (req, res) => {
    const livroId = getLivro(req.params.id);
    res.status(201).json(livros[livroId]);
});

app.put("/livros/:id", (req, res) => {
    const { id } = req.params;
    const index = getLivro(id);

    livros[index].titulo = req.body.titulo;
    res.status(201).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const { id } = req.params;
    const index = getLivro(id);

    livros.splice(index, 1);
    res.status(201).send(`Excluído`);
});

function getLivro(id) {
    return livros.findIndex((livro) => livro.id == id);
}

routes(app);

export default app;
