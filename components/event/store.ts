import db from '../../database'
import {Event, EventUser} from './models'

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

export const getEventUser= async (idUsuario: number) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT eventos.Id, eventos.name_evento, eventos.organizador, eventos.fecha_evento, eventos.descripcion_evento FROM evento_usuarios 
        INNER JOIN eventos ON evento_usuarios.Id_Evento = eventos.Id
        INNER JOIN users ON evento_usuarios.Id_Usuario = users.Id
        WHERE users.Id = ${idUsuario}`;
        try {
            db.query(query, (_err, result) => {
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}

export const addEventUser = async (eventoUser:EventUser) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO evento_usuarios VALUES(${eventoUser.Id_Evento},${eventoUser.Id_Usuario})`;
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

export const getInteresados = async (evento:number) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT COUNT(*) as Interesados from evento_usuarios where Id_Evento=${evento};`;
        try {
            db.query(query, (_err, result) => {
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}

export const deleteEventUser = async (eventoUser:EventUser) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM evento_usuarios WHERE Id_Usuario=${eventoUser.Id_Usuario} AND Id_Evento=${eventoUser.Id_Evento};`;
        try {
            db.query(query, (_err, result) => {
                resolve(result);
            })
        } catch (error) {
            reject(error);
        }
    })
}