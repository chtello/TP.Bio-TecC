const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto:${port}`);
});