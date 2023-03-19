import db from '../../database'
import {User} from './models'

export const getUsers = async () => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM Users`;
        try {
            db.query(query, (_err, result) => {
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}

export const getUser = async (email: string) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM Users WHERE email = "${email}"`;
        try {
            db.query(query, (_err, result) => {
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}

export const addUser = async (user:User) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO Users VALUES(${user.name},${user.last_name},${user.second_name},${user.age},${user.email})`;
        try {
            db.query(query, (_err, result) => {
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}