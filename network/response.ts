// MANEJO DE RESPUESTAS POR PARTE DE LAS PETICIONES, DEPENDIENTO SI DAN ERROR O SUCCESS

import { Response } from "express";

export const responseSuccess = (_req:any,res:Response, message:any, status:number) => {
    res.status(status || 200).send({
        error: "",
        body: message 
    });
}

export const responseError = (_req:any, res:Response, message:any, status:number) => {
    res.status(status || 500).send({
        error: message,
        body:"",
    })
}