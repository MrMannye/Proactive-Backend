import express from 'express'
import { responseSuccess, responseError } from '../../network/response';
import { getEvents, getEvent, getEventInterest, getEventUser, addEventUser, getInteresados, deleteEventUser } from './controller';

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

// OBTENER LOS EVENTOS DEL USUARIO DE UN USUARIO
router.post("/miseventos", async(req,res) => {
    try {
        const eventosUser = await getEventUser(req.body.id);
        responseSuccess(req,res,eventosUser,200);
    } catch (error) {
        responseError(req, res, error, 500);
    }
})

router.get("/eventosInteresados/:id", async(req,res) => {
    try {
        const eventos = await getInteresados(parseInt(req.params.id));
        responseSuccess(req,res,eventos,200);
    } catch (error) {
        responseError(req, res, error, 500);
    }
})

// SUSCRIBIRSE A UN EVENTO DEL USUARIO
router.post("/addEvent", async(req,res) => {
    try {
        const eventosUser = await addEventUser(req.body);
        responseSuccess(req,res,eventosUser,200);
    } catch (error) {
        responseError(req, res, error, 500);
    }
})

// ELIMIAR UN EVENTO DEL USUARIO
router.post("/deletEventUser", async(req,res) => {
    try {
        const eventosUser = await deleteEventUser(req.body);
        responseSuccess(req,res,eventosUser,200);
    } catch (error) {
        responseError(req, res, error, 500);
    }
})


export default router