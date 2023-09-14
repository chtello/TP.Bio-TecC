const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;

const GenSchema = new Schema({
    ADN:String,
    ARNm:String,
    Polipéptidos:String
});


const Genes = mongoose.model("Genes", GenSchema);

module.exports = Genes;