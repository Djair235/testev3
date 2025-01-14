const express = require("express")
const getModel = require("../models/getModel")
const app = express()
const router = express.Router()

// router.get("/", (req, res) => {
//     res.send("Router e Vercel estão funcionando!")
// })

router.get("/", getModel.getAll)

module.exports = router
