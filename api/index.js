const express = require("express")
const router = ("../router/router")
const app = express()
app.use(router)

function ligarServidor() {
    try {
        app.listen(3000, () => {
            console.log("Servidor ONLINE - rodando na porta 3000.")
        })
    } catch (error) {
        console.error(`Falha ao iniciar o servidor: ${error}`)
    }
}
ligarServidor()

module.exports = app
