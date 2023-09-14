const express = require("express");
const router = express.Router();
const Genes = require("../model/Genes")

router.get("/", async (req, res) => {
    try {
        const ArGnDB = await Genes.find()
        console.log(ArGnDB)
        res.render("GGuar",{
        ArGn: ArGnDB} );
    } catch (error) {
      
    }
    
  });

module.exports = router;