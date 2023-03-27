import express from 'express'
import { responseSuccess, responseError } from '../../network/response';
import { getEvents, getEvent, getEventInterest, getEventUser } from './controller';

const router = express.Router();

// OBTENER TODOS LOS EVENTOS
router.get("/", async(req,res) => {
    try {
        const eventos = await getEvents();
        responseSuccess(req,res,eventos,200);
    } catch (error) {
        responseError(req, res, error, 500);
    }
})

// OBTENER UN EVENTO
router.get("/:id", async(req,res) => {
    try {
        const evento = await getEvent(parseInt(req.params.id));
        responseSuccess(req,res,evento,200);
    } catch (error) {
        responseError(req, res, error, 500);
    }
})

// OBTENER LOS INTERESES DE UN EVENTO 
router.get("/interest/:id", async(req,res) => {
    try {
        const newUser = await getEventInterest(parseInt(req.params.id));
        responseSuccess(req,res,newUser,200);
    } catch (error) {
        responseError(req, res, error, 500);
    }
})

// OBTENER LOS EVENTOS DE INTERES DE UN USUARIO
router.post("/miseventos", async(req,res) => {
    try {
        const eventosUser = await getEventUser(req.body.id);
        responseSuccess(req,res,eventosUser,200);
    } catch (error) {
        responseError(req, res, error, 500);
    }
})

export default router