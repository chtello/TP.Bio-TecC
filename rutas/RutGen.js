
const express = require("express");
const GenesSchema = require("../Crud");
const  router = express.Router();
// crear nuevas notas
router.post("/Genes",(req,res) =>{
    const Nota = NotaSchema(req.json);
    Nota
    .save()
    .then((data)=>res.json(data),console.log("dato resivido correctamente"))
    .catch((error)=>console.log ("tu error es :"+error))
});
module.exports = router;