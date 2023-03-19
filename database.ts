import mysql from 'mysql'

const db = mysql.createPool({
    host: "us-cdbr-east-04.cleardb.com",
    user:"b977b2dec65957",
    password:"25068e20",
    database: "heroku_c9a186fb0967e5b",
    port: 3306,
})

export default db;