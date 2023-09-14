const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenSchema = new Schema({
    adn: String,
    arnm: String,
    polipéptidos : String
})


const Genes = mongoose.model("Genes", GenSchema);

module.exports = Genes;