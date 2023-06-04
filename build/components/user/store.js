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
exports.addUser = exports.getUserInterest = exports.getUser = exports.getUsers = void 0;
const database_1 = __importDefault(require("../../database"));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users`;
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
const getUser = (myaddress) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users WHERE my_address = "${myaddress}"`;
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
const getUserInterest = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users_intereses 
        INNER JOIN intereses ON users_intereses.Id_Interes = intereses.Id
        INNER JOIN users ON users_intereses.Id_User = users.Id
        WHERE users.email = "${email}"`;
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
exports.getUserInterest = getUserInterest;
const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO users (name,last_name,second_name,age,my_address,friend_transfer,email,password,level) VALUES("${user.name}","${user.last_name}","${user.second_name}",${user.age},"${user.myaddress}","${user.friend_transfer}","${user.email}","${user.password}",${user.level})`;
        try {
            database_1.default.query(query, (_err, result) => {
                console.log(_err);
                resolve(result);
            });
        }
        catch (error) {
            reject(error);
        }
    });
});
exports.addUser = addUser;
