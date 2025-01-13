const express = require("express")
const app = express()
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Router e Vercel estão funcionando!")
})

module.exports = router
