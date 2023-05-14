import express from 'express'
import { getTask, getMyTasks, completeTask, getMyCompletedTasks } from './store';
import { responseError, responseSuccess } from '../../network/response';
const router = express.Router();


router.get("/:id", async (req, res) => {
    try {
        const task = await getTask(parseInt(req.params.id));
        responseSuccess(req,res,task,200);
    } catch (error) {
        responseError(req,res,error,200);
    }
})

router.get("/mytasks/:myaddress", async (req,res) => {
    try {
        const myTasks = await getMyTasks(req.params.myaddress);
        responseSuccess(req,res,myTasks,200);
    } catch (error) {
        responseError(req,res,error,500);
    }   
})

router.get("/myCompletedTasks/:myaddress", async (req,res) => {
    try {
        const myCompletedTasks = await getMyCompletedTasks(req.params.myaddress);
        responseSuccess(req,res,myCompletedTasks,200);
    } catch (error) {
        responseError(req,res,error,500);
    }   
})

router.post("/completeTask", async (req,res) => {
    try {
        const completeTasks = await completeTask(req.body);
        responseSuccess(req,res,completeTasks,200);
    } catch (error) {
        responseError(req,res,error,500);
    }   
})


export default router;