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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEventUser = exports.addEventUser = exports.getInteresados = exports.getEventInterest = exports.getEventUser = exports.getEvent = exports.getEvents = void 0;
const store_1 = require("./store");
const getEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const eventos = yield (0, store_1.getEvents)();
            resolve(eventos);
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.getEvents = getEvents;
const getEvent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const evento = yield (0, store_1.getEvent)(id);
            resolve(evento);
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.getEvent = getEvent;
const getEventUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const eventos = yield (0, store_1.getEventUser)(id);
            resolve(eventos);
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.getEventUser = getEventUser;
const getEventInterest = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        if (!id)
            reject("[controller] no hay datos para añadir");
        try {
            const evento = yield (0, store_1.getEventInterest)(id);
            resolve(evento);
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.getEventInterest = getEventInterest;
const getInteresados = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        if (!event)
            reject("[controller] no hay datos para añadir");
        try {
            const eventos = yield (0, store_1.getInteresados)(event);
            resolve(eventos);
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.getInteresados = getInteresados;
const addEventUser = (eventUser) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        if (!eventUser)
            reject("[controller] no hay datos para añadir");
        try {
            const addedEvento = yield (0, store_1.addEventUser)(eventUser);
            resolve(addedEvento);
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.addEventUser = addEventUser;
const deleteEventUser = (eventUser) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        if (!eventUser)
            reject("[controller] no hay datos para añadir");
        try {
            const addedEvento = yield (0, store_1.deleteEventUser)(eventUser);
            resolve(addedEvento);
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.deleteEventUser = deleteEventUser;
