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
exports.addTask = exports.completeTask = exports.getMyCompletedTasks = exports.getMyTasks = exports.getTask = void 0;
const database_1 = __importDefault(require("../../database"));
const getTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `SELECT * FROM tasks WHERE id = ${id}`;
        try {
            database_1.default.query(query, (_err, result) => {
                console.log(_err);
                resolve(result);
            });
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.getTask = getTask;
const getMyTasks = (myaddress) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `SELECT * FROM tasks WHERE tasks.user_address = "${myaddress}" AND tasks.completed_task = 0`;
        try {
            database_1.default.query(query, (_err, result) => {
                console.log(_err);
                resolve(result);
            });
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.getMyTasks = getMyTasks;
const getMyCompletedTasks = (myaddress) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `SELECT * FROM tasks WHERE tasks.user_address = "${myaddress}" AND tasks.completed_task = 1`;
        try {
            database_1.default.query(query, (_err, result) => {
                console.log(_err);
                resolve(result);
            });
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.getMyCompletedTasks = getMyCompletedTasks;
const completeTask = (completedTask) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `UPDATE tasks SET tasks.completed_task = ${completedTask.completed_task} WHERE tasks.id = ${completedTask.id_task}`;
        try {
            database_1.default.query(query, (_err, result) => {
                console.log(_err);
                resolve(result);
            });
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.completeTask = completeTask;
const addTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `INSERT INTO tasks (nombre_task,descripcion_task,completed_task,user_address,created_task) VALUES("${task.nombre_task}","${task.descripcion_task}", ${task.completed_task}, "${task.user_address}","${task.created_task}")`;
        try {
            database_1.default.query(query, (_err, result) => {
                console.log(_err);
                resolve(result);
            });
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.addTask = addTask;
