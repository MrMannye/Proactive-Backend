import express from 'express'
import { responseSuccess, responseError } from '../../network/response';
import { login } from './controller';

const router = express.Router();

// loggear USUARIO 
router.post("/login", async(req,res) => {
    try {
        const newUser = await login(req.body);
        responseSuccess(req,res,newUser,200);
    } catch (error) {
        responseError(req, res, error, 401);
    }
})

export default router