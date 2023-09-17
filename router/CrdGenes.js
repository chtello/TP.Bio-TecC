const express = require("express");
const router = express.Router();
const MGen = require("../model/MGen");


router.get("/N", (req, res) => {
  res.render("N");
});
  router.get("/", (req, res) => {
    res.render("index");
});


router.get("/GGuar", async (req, res) => {
  try {
          const ArGnDB = await MGen.find()
        console.log("hola" + ArGnDB)
        res.render("GGuar", {
        ArGn : ArGnDB
      })
  } catch (error) {
    console.log(error)
  }
})



module.exports = router;