"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getUser = exports.getUsers = void 0;
const database_1 = __importDefault(require("../../database"));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM Users`;
        try {
            database_1.default.query(query, (_err, result) => {
                resolve(result);
            });
        }
        catch (error) {
            reject(error);
        }
    });
});
exports.getUsers = getUsers;
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM Users WHERE email = "${email}"`;
        try {
            database_1.default.query(query, (_err, result) => {
                resolve(result);
            });
        }
        catch (error) {
            reject(error);
        }
    });
});
exports.getUser = getUser;
const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO Users VALUES(${user.name},${user.last_name},${user.second_name},${user.age},${user.email})`;
        try {
            database_1.default.query(query, (_err, result) => {
                resolve(result);
            });
        }
        catch (error) {
            reject(error);
        }
    });
});
exports.addUser = addUser;
