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
const store_1 = require("./store");
const response_1 = require("../../network/response");
const router = express_1.default.Router();
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield (0, store_1.getTask)(parseInt(req.params.id));
        (0, response_1.responseSuccess)(req, res, task, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 200);
    }
}));
router.get("/mytasks/:myaddress", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myTasks = yield (0, store_1.getMyTasks)(req.params.myaddress);
        (0, response_1.responseSuccess)(req, res, myTasks, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
router.get("/myCompletedTasks/:myaddress", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myCompletedTasks = yield (0, store_1.getMyCompletedTasks)(req.params.myaddress);
        (0, response_1.responseSuccess)(req, res, myCompletedTasks, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
router.post("/completeTask", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const completeTasks = yield (0, store_1.completeTask)(req.body);
        (0, response_1.responseSuccess)(req, res, completeTasks, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
router.post("/addTask", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const completeTasks = yield (0, store_1.addTask)(req.body);
        (0, response_1.responseSuccess)(req, res, completeTasks, 200);
    }
    catch (error) {
        (0, response_1.responseError)(req, res, error, 500);
    }
}));
exports.default = router;
