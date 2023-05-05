import db from '../../database'
import {UserDB} from './models'

export const getUser = async (email: string):Promise<UserDB> => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users WHERE email = "${email}"`;
        try {
            db.query(query, (_err, result) => {
                console.log(result[0])
                resolve(result[0]);
            })
        } catch (error) {
            reject(error);
        }
    })
}
