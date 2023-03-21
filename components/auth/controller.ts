import {User, UserDB} from './models'
import {getUser as get } from './store'

export const login = async (user:User) => {
    return new Promise(async(resolve,reject) => {
        try {
            const authUser = await get(user.email);
            if(authUser.password === user.password){
                resolve(user);
            }else{
                reject("[controller auth] Credenciales invalidas")
            }
        } catch (error) {
            reject(error)
        }
    })
}  