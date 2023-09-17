const mongoose = require("mongoose");

const genSchema = mongoose.Schema({
    adn:String,
    arnm:String,
    polipéptidos:String
})


const MGen = mongoose.model("MGen", genSchema);


module.exports = MGen;