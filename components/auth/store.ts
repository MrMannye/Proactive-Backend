import db from '../../database'
import {UserDB} from './models'

export const getUser = async (email: string):Promise<UserDB> => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM Users WHERE email = "${email}"`;
        try {
            db.query(query, (_err, result) => {
                resolve(result[0]);
            })
        } catch (error) {
            reject(error);
        }
    })
}
