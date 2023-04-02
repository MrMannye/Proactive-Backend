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
const express_1 = __importDefault(require("express"));
const response_1 = require("../../network/response");
const controller_1 = require("./controller");
const router = express_1.default.Router();
// OBTENER TODOS LOS EVENTOS
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eventos = yield (0, controller_1.getEvents)();
        (0, response_1.responseSuccess)(req, res, eventos, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
// OBTENER UN EVENTO
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const evento = yield (0, controller_1.getEvent)(parseInt(req.params.id));
        (0, response_1.responseSuccess)(req, res, evento, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
// OBTENER LOS INTERESES DE UN EVENTO 
router.get("/interest/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield (0, controller_1.getEventInterest)(parseInt(req.params.id));
        (0, response_1.responseSuccess)(req, res, newUser, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
// OBTENER LOS EVENTOS DEL USUARIO DE UN USUARIO
router.post("/miseventos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eventosUser = yield (0, controller_1.getEventUser)(req.body.id);
        (0, response_1.responseSuccess)(req, res, eventosUser, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
router.get("/eventosInteresados/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eventos = yield (0, controller_1.getInteresados)(parseInt(req.params.id));
        (0, response_1.responseSuccess)(req, res, eventos, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
// SUSCRIBIRSE A UN EVENTO DEL USUARIO
router.post("/addEvent", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eventosUser = yield (0, controller_1.addEventUser)(req.body);
        (0, response_1.responseSuccess)(req, res, eventosUser, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
// ELIMIAR UN EVENTO DEL USUARIO
router.post("/deletEventUser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const eventosUser = yield (0, controller_1.deleteEventUser)(req.body);
        (0, response_1.responseSuccess)(req, res, eventosUser, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
exports.default = router;
