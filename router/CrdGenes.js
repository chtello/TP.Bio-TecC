const express = require("express");
const router = express.Router();
const MGen = require("../model/MGen");




router.get("/", async (req, res) => {
  try {
          const arayGensDB = await MGen.find()
        res.render("GGuar", {
          arayGens : arayGensDB
      })
  } catch (error) {
    console.log(error)
  }
})

router.post("/", async (req,res)=>{
  const body = req.body
  try {
      const GenDB = new MGen(body)
      await GenDB.save()
  res.redirect("/GGuar")
  console.log(GenDB)
  } catch (error) {
      console.log(error)
  }
  });
  

module.exports = router;