const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");
const path = require("path");
const router = express.Router();

let port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "AxGen")));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/N", (req, res) => {
  res.render("N");
});
app.use("/GG",require("./router/CrdGenes"));

app.get("/", (req, res) => {
    res.render("index");
});

mongoose
.connect("mongodb+srv://chtello:DSO6gkyYXDUJ8w94@cluster0.rsw7cpq.mongodb.net/?retryWrites=true&w=majority")
.then(console.log("Connected to database"))
.catch((error)=>console.log("tienes un error, tu error es :" + error));


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto:${port}`);
});

module.exports = router;

