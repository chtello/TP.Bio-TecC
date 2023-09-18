const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");
const path = require("path");
const bodyParser = require('body-parser');
let port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "AxGen")))

app.use("/",require("./router/rutPag"))
app.use("/GGuar",require("./router/CrdGenes"))
app.use("/N",require("./router/CrdGenes"))


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


mongoose
.connect("mongodb+srv://chtello:QiX1qJtmwtFMnErT@cluster0.c6wer77.mongodb.net/BanGenes?retryWrites=true&w=majority")
.then(console.log("Connected to database"))
.catch((error)=>console.log("tienes un error, tu error es :" + error));


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto:${port}`)
});


