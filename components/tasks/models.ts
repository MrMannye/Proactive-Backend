export interface Task {
    nombre_task: string, 
    descripcion_task: string, 
    completed_task: boolean, 
    user_address: number
}

export interface completedTask{
    id_task: number,
    completed_task: number
}