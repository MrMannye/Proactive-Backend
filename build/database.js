"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const db = mysql_1.default.createPool({
    host: "us-cdbr-east-04.cleardb.com",
    user: "b977b2dec65957",
    password: "25068e20",
    database: "heroku_c9a186fb0967e5b",
    port: 3306,
});
exports.default = db;
