const mysql2 = require("mysql2/promise")

const connection = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    waitForConnections: true,
    connectionLimit: 5, // Limite de conexões no pool
    queueLimit: 0   
})

module.exports = connection
