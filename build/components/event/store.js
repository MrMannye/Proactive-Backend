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
exports.addEvent = exports.getEventInterest = exports.getEvent = exports.getEvents = void 0;
const database_1 = __importDefault(require("../../database"));
const getEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM Eventos`;
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
        const query = `SELECT * FROM Eventos WHERE id=${id}`;
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
const addEvent = (evento) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO Eventos VALUES(${evento.name_evento},${evento.descripcion_evento},${evento.fecha_evento})`;
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
