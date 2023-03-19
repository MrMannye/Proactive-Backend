import {Event} from './models'
import { getEvents as get, getEvent as getOne , getEventInterest as getInterest } from './store'

export const getEvents = async () => {
    return new Promise(async(resolve,reject) => {
        try {
            const eventos = await get();
            resolve(eventos);
        } catch (error) {
            reject(error)
        }
    })
}

export const getEvent = async (id:number) => {
    return new Promise(async(resolve,reject) => {
        try {
            const evento = await getOne(id);
            resolve(evento);
        } catch (error) {
            reject(error)
        }
    })
}

export const getEventInterest = async (id:number) => {
    return new Promise(async(resolve,reject) => {
        if(!id) reject("[controller] no hay datos para añadir")
        try {
            const evento = await getInterest(id);
            resolve(evento);
        } catch (error) {
            reject(error)
        }
    })
}  