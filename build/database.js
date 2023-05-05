"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const db = mysql_1.default.createPool({
    host: "b2e2w0o0ppbm09xyr5ys-mysql.services.clever-cloud.com",
    user: "ufmmsgqyefsctovu",
    password: "DFh7xisGnbUHGTBxVxUE",
    database: "b2e2w0o0ppbm09xyr5ys",
    port: 3306,
});
exports.default = db;
