const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

const db = mysql.createPool({
    host: "us-cdbr-east-04.cleardb.com",
    user:"b977b2dec65957",
    password:"25068e20",
    database: "heroku_c9a186fb0967e5b",
    port: 3306,
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

    const sql = "SELECT * FROM user_register WHERE user_publickey = ? AND task_state = 0";
    db.query(sql,[publicKey],(err,result) => {
        res.send(result);
    })
})

app.get("/tasks/:publickey/:task_name", (req,res) => {
    const publicKey = req.params.publickey;
    const task_name = req.params.task_name;

    const sql = "SELECT * FROM user_register WHERE user_publickey = ? AND task_name = ?";
    db.query(sql,[publicKey,task_name],(err,result) => {
        res.send(result);
    })
})

app.get("/completedTasks/:publickey", (req,res) => {
    const publicKey = req.params.publickey;

    const sql = "SELECT * FROM user_register WHERE user_publickey = ? AND task_state = 1";
    db.query(sql,[publicKey],(err,result) => {
        res.send(result);
    })
})


app.post("/addTask", (req, res) => {
    const user_publickey = req.body.user_publickey;
    const task_name = req.body.task_name;
    const task_desc = req.body.task_desc;
    const date = new Date();
    const task_state = req.body.task_state;

    const sql = "INSERT INTO user_register VALUES(?,?,?,?,?,?)";

    db.query(sql, [user_publickey,task_name,task_desc,date,task_state,"0x0"], (err,result) => {
        res.send("Task Ingresado Correctamente");
    })
})

app.post("/completeTask", (req, res) => {
    const user_publickey = req.body.user_publickey;
    const task_name = req.body.task_name;

    const sql = "UPDATE user_register SET task_state = 1 WHERE user_publickey = ? AND task_name = ?";

    db.query(sql, [user_publickey,task_name], (err,result) => {
        res.send("Task Completado Correctamente");
    })
})

app.listen(process.env.PORT || 8080, () => {
    console.log("Escuchando en puerto 8080");
})