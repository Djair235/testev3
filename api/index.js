const express = require("express")
const router = ("../api/router/router.js")
const app = express()

app.use(router)

app.listen(3000, () => {
    console.log("Server rodando na porta 3000")
})

module.exports = app
