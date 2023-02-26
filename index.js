const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

const db = mysql.createPool({
    host: "us-cdbr-east-04.cleardb.com",
    user:"b977b2dec65957",
    password:"25068e20",
    database: "heroku_c9a186fb0967e5b",
    port: process.env.PORT || 3306,
})


app.use(cors({
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}));

app.get("/tasks", (req,res) => {
    const sql = "SELECT * FROM user_register";
    db.query(sql,(err,result) => {
        res.send(result);
    })
})

app.get("/tasks/:publickey", (req,res) => {
    const publicKey = req.params.publickey;

    const sql = "SELECT * FROM user_register WHERE user_publickey = ?";
    db.query(sql,[publicKey],(err,result) => {
        res.send(result);
    })
})


app.post("/tasks", (req, res) => {
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const proyecto = req.body.proyecto;
    const texto = req.body.texto;

    const sql = "INSERT INTO Contacto(Cli_nombre, Cli_correo,Cli_proyecto,Cli_mensaje) VALUES(?,?,?,?)";

    db.query(sql, [nombre,correo,proyecto,texto], (err,result) => {
        res.send("Usuario Ingresado Correctamente");
    })
})

app.listen(process.env.PORT || 8080, () => {
    console.log("Escuchando en puerto 8080");
})