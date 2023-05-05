import mysql from 'mysql'

const db = mysql.createPool({
    host: "b2e2w0o0ppbm09xyr5ys-mysql.services.clever-cloud.com",
    user:"ufmmsgqyefsctovu",
    password:"DFh7xisGnbUHGTBxVxUE",
    database: "b2e2w0o0ppbm09xyr5ys",
    port:3306,
})
export default db;  