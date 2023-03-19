import db from '../../database'
import {Event} from './models'

export const getEvents = async () => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM Eventos`;
        try {
            db.query(query, (_err, result) => {
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}

export const getEvent= async (id: number) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM Eventos WHERE id=${id}`;
        try {
            db.query(query, (_err, result) => {
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}

export const getEventInterest= async (id: number) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM evento_intereses 
        INNER JOIN eventos ON evento_intereses.Id_Evento = eventos.Id
        INNER JOIN intereses ON evento_intereses.Id_Interes = intereses.Id
        WHERE evento_intereses.Id_Evento=${id}`;
        try {
            db.query(query, (_err, result) => {
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}

export const addEvent = async (evento:Event) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO Eventos VALUES(${evento.name_evento},${evento.descripcion_evento},${evento.fecha_evento})`;
        try {
            db.query(query, (_err, result) => {
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}