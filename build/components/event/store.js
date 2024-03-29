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
exports.deleteEventUser = exports.getInteresados = exports.addEvent = exports.addEventUser = exports.getEventUser = exports.getEventInterest = exports.getEvent = exports.getEvents = void 0;
const database_1 = __importDefault(require("../../database"));
const getEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM eventos`;
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
exports.getEvents = getEvents;
const getEvent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM eventos WHERE id=${id}`;
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
exports.getEvent = getEvent;
const getEventInterest = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM evento_intereses 
        INNER JOIN eventos ON evento_intereses.Id_Evento = eventos.Id
        INNER JOIN intereses ON evento_intereses.Id_Interes = intereses.Id
        WHERE evento_intereses.Id_Evento=${id}`;
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
exports.getEventInterest = getEventInterest;
const getEventUser = (idUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `SELECT eventos.Id, eventos.name_evento, eventos.organizador, eventos.fecha_evento, eventos.descripcion_evento FROM evento_usuarios 
        INNER JOIN eventos ON evento_usuarios.Id_Evento = eventos.Id
        INNER JOIN users ON evento_usuarios.Id_Usuario = users.Id
        WHERE users.Id = ${idUsuario}`;
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
exports.getEventUser = getEventUser;
const addEventUser = (eventoUser) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO evento_usuarios VALUES(${eventoUser.Id_Evento},${eventoUser.Id_Usuario})`;
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
exports.addEventUser = addEventUser;
const addEvent = (evento) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO eventos VALUES(${evento.name_evento},${evento.descripcion_evento},${evento.fecha_evento})`;
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
exports.addEvent = addEvent;
const getInteresados = (evento) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `SELECT COUNT(*) as Interesados from evento_usuarios where Id_Evento=${evento};`;
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
exports.getInteresados = getInteresados;
const deleteEventUser = (eventoUser) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM evento_usuarios WHERE Id_Usuario=${eventoUser.Id_Usuario} AND Id_Evento=${eventoUser.Id_Evento};`;
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
exports.deleteEventUser = deleteEventUser;
