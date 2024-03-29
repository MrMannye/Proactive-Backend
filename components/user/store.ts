import db from '../../database'
import {User} from './models'

export const getUsers = async () => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users`;
        try {
            db.query(query, (_err, result) => {
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}

export const getUser = async (myaddress: string): Promise<User[]> => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users WHERE my_address = "${myaddress}"`;
        try {
            db.query(query, (_err, result) => {
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}

export const getUserInterest = async (email: string) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users_intereses 
        INNER JOIN intereses ON users_intereses.Id_Interes = intereses.Id
        INNER JOIN users ON users_intereses.Id_User = users.Id
        WHERE users.email = "${email}"`;
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
        const query = `INSERT INTO users (name,last_name,second_name,age,my_address,friend_transfer,email,password,level) VALUES("${user.name}","${user.last_name}","${user.second_name}",${user.age},"${user.myaddress}","${user.friend_transfer}","${user.email}","${user.password}",${user.level})`;
        try {
            db.query(query, (_err, result) => {
                console.log(_err)
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}
