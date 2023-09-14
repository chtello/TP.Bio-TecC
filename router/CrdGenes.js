const express = require("express");
const router = express.Router();
const Genes = require("../model/Genes")

router.get("/N", (req, res) => {
  res.render("N");
});
  router.get("/", (req, res) => {
    res.render("index");
});
router.get("/GGuar", async (req, res) => {
try {
        const ArGnDB = await Genes.find()
      console.log("hola" + ArGnDB)
      res.render("GGuar", {
      ArGn : ArGnDB
    })
} catch (error) {
  
}
router.post("/GG", async(req,res) => {
  const body = require.body
  
})

  });
module.exports = router;