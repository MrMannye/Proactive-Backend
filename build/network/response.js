"use strict";
// MANEJO DE RESPUESTAS POR PARTE DE LAS PETICIONES, DEPENDIENTO SI DAN ERROR O SUCCESS
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseError = exports.responseSuccess = void 0;
const responseSuccess = (_req, res, message, status) => {
    res.status(status || 200).send({
        error: "",
        body: message
    });
};
exports.responseSuccess = responseSuccess;
const responseError = (_req, res, message, status) => {
    res.status(status || 500).send({
        error: message,
        body: "",
    });
};
exports.responseError = responseError;
