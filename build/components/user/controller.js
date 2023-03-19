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
exports.addUser = exports.getUser = exports.getUsers = void 0;
const store_1 = require("./store");
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield (0, store_1.getUsers)();
            resolve(users);
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.getUsers = getUsers;
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield (0, store_1.getUser)(email);
            resolve(user);
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.getUser = getUser;
const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        if (!user)
            reject("[controller] no hay datos para añadir");
        try {
            const users = yield (0, store_1.addUser)(user);
            resolve(users);
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.addUser = addUser;
