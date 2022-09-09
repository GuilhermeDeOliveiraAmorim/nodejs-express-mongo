import app from "./src/app.js";

const port = process.env.PORT || 3000;

console.log(process.env.PORT);

app.listen(port, () => {
    console.log(`Listening in http://localhost:${port}`);
});
