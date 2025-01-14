const connection = require("../db/database")

async function getAll(request, response) {
    try {
        const [rows] = await connection.execute("SELECT * from clientes")
        return response.status(200).json(rows)
    } catch (error) {
        console.error(`Erro ao buscar os clientes. ${error}`)
        return response.status(400).json({erro: "Erro interno ao ao processar a requisição"})
    }
}

module.exports = { getAll }
