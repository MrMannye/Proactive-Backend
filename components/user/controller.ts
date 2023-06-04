import {User} from './models'
import { getUsers as get, getUser as getOne , addUser as add, getUserInterest as getInterest } from './store'

export const getUsers = async () => {
    return new Promise(async(resolve,reject) => {
        try {
            const users = await get();
            resolve(users);
        } catch (error) {
            reject(error)
        }
    })
}

export const getUser = async (myaddress:string) => {
    return new Promise(async(resolve,reject) => {
        try {
            const user:User[] = await getOne(myaddress);
            // NO EXISTE EL USUARIO CON ESA DIRECCION DE WALLET
            if(!user.length){
                const newUser:User = {
                    name: "",
                    last_name: "",
                    second_name:"",
                    age: 18, 
                    myaddress: myaddress,
                    friend_transfer: "", 
                    email: "",
                    password: "",
                    level: 1,
                }
                const userAdded = await addUser(newUser);
                resolve("USUARIO NUEVO")
            }
            resolve(user);
        } catch (error) {
            reject(error)
        }
    })
}

export const getUserInterest = async (email:string) => {
    return new Promise(async(resolve,reject) => {
        try {
            const user = await getInterest(email);
            resolve(user);
        } catch (error) {
            reject(error)
        }
    })
}

export const addUser = async (user:User) => {
    return new Promise(async(resolve,reject) => {
        if(!user) reject("[controller] no hay datos para añadir")
        try {
            const users = await add(user);
            resolve(users);
        } catch (error) {
            reject(error)
        }
    })
}  