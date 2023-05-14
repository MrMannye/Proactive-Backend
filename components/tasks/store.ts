import db from "../../database";
import { completedTask } from "./models";

export const getTask = async (id: number) => {
    return new Promise(async (resolve, reject) => {
        const query = `SELECT * FROM tasks WHERE id = ${id}`;
        try {
            db.query(query, (_err, result) => {
                console.log(_err);
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}

export const getMyTasks = async (myaddress: string) => {
    return new Promise(async (resolve, reject) => {
        const query = `SELECT * FROM tasks WHERE tasks.user_address = "${myaddress}" AND tasks.completed_task = 0`;
        try {
            db.query(query, (_err, result) => {
                console.log(_err);
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}

export const getMyCompletedTasks = async (myaddress: string) => {
    return new Promise(async (resolve, reject) => {
        const query = `SELECT * FROM tasks WHERE tasks.user_address = "${myaddress}" AND tasks.completed_task = 1`;
        try {
            db.query(query, (_err, result) => {
                console.log(_err);
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}

export const completeTask = async(completedTask: completedTask) => {
    return new Promise(async(resolve,reject) => {
        const query = `UPDATE tasks SET tasks.completed_task = ${completedTask.completed_task} WHERE tasks.id = ${completedTask.id_task}`;
        try {
            db.query(query, (_err,result) => {
                console.log(_err);
                resolve(result);
            })
        } catch (error) {
            reject(error)
        }
    })
}