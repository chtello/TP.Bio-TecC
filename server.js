const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");
const GenRutas = require("./rutas/RutGen")
let port = 3000;


mongoose
.connect("mongodb+srv://chtello:BaseAdN@cluster0.i9xi2fa.mongodb.net/?retryWrites=true&w=majority")
    .then(console.log("Connected to database"))
    .catch((error)=>console.log("tienes un error, tu error es :" + error));


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto:${port}`);
});