import mysql from 'mysql'

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"123456789",
    database: "Proactive",
    port: 3306,
})

export default db;