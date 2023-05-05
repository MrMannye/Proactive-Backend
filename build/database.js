"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const db = mysql_1.default.createPool({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "Proactive",
    port: 3306,
});
exports.default = db;
