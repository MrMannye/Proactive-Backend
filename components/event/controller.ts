import {Event, EventUser} from './models'
import { getEvents as get, 
    getEvent as getOne, 
    getEventInterest as getInterest, 
    getEventUser as getEUser, 
    addEventUser as addEventU, 
    getInteresados as getI } from './store'

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

export const getEventUser = async (id:number) => {
    return new Promise(async(resolve,reject) => {
        try {
            const eventos = await getEUser(id);
            resolve(eventos);
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

export const getInteresados = async (event:number) => {
    return new Promise(async(resolve,reject) => {
        if(!event) reject("[controller] no hay datos para añadir")
        try {
            const eventos = await getI(event);
            resolve(eventos);
        } catch (error) {
            reject(error)
        }
    })
} 

export const addEventUser = async (eventUser:EventUser) => {
    return new Promise(async(resolve,reject) => {
        if(!eventUser) reject("[controller] no hay datos para añadir")
        try {
            const addedEvento = await addEventU(eventUser);
            resolve(addedEvento);
        } catch (error) {
            reject(error)
        }
    })
}  