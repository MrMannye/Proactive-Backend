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
const controller_2 = require("./controller");
const router = express_1.default.Router();
// OBTENER TODOS LOS USUARIOS
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, controller_1.getUsers)();
        (0, response_1.responseSuccess)(req, res, users, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
// OBTENER UN USUARIO
router.get("/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, controller_1.getUser)(req.params.email);
        (0, response_1.responseSuccess)(req, res, user, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
router.get("/interest/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, controller_2.getUserInterest)(req.params.email);
        (0, response_1.responseSuccess)(req, res, user, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
// AÑADIR USUARIO NUEVO 
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield (0, controller_1.addUser)(req.body);
        (0, response_1.responseSuccess)(req, res, newUser, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
exports.default = router;
