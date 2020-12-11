const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Valorizando a Cultura Negra",
    version: "1.0.0",
    descrition: "jjjj"

  })
})


module.exports = router
