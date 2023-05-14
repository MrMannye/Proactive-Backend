import express from 'express'
import { responseSuccess, responseError } from '../../network/response';
import { addUser, getUsers, getUser } from './controller';
import { getUserInterest } from './controller';

const router = express.Router();

// OBTENER TODOS LOS USUARIOS
router.get("/", async(req,res) => {
    try {
        const users = await getUsers();
        responseSuccess(req,res,users,200);
    } catch (error) {
        responseError(req, res, error, 500);
    }
})

// OBTENER UN USUARIO
router.get("/:myaddress", async(req,res) => {
    try {
        const user = await getUser(req.params.myaddress);
        responseSuccess(req,res,user,200);
    } catch (error) {
        responseError(req, res, error, 500);
    }
})

router.get("/interest/:email", async(req,res) => {
    try {
        const user = await getUserInterest(req.params.email);
        responseSuccess(req,res,user,200);
    } catch (error) {
        responseError(req, res, error, 500);
    }
})

// AÑADIR USUARIO NUEVO 
router.post("/", async(req,res) => {
    try {
        const newUser = await addUser(req.body);
        responseSuccess(req,res,newUser,200);
    } catch (error) {
        responseError(req, res, error, 500);
    }
})

export default router