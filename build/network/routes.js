"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const network_1 = __importDefault(require("../components/user/network"));
const network_2 = __importDefault(require("../components/event/network"));
const network_3 = __importDefault(require("../components/auth/network"));
const routes = (server) => {
    server.use('/users', network_1.default);
    server.use('/events', network_2.default);
    server.use('/auth', network_3.default);
};
exports.routes = routes;
