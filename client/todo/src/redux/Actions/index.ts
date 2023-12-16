import {ITodoActionsTypes} from "../../types/types";

export const createTodo = (payload: string) => {
    return{
        type: ITodoActionsTypes.CREATE_TODO,
        payload
    }
}
export const deleteTodo = (payload: string) => {
    return{
        type: ITodoActionsTypes.DELETE_TODO,
        payload
    }
}
export const getTodos = () => {
    return{
        type: ITodoActionsTypes.GET_TODOS,
    }
}
export const completeTodo = (id: string, done: boolean) => {
    return{
        type: ITodoActionsTypes.COMPLETE_TODO,
        payload: {
            id,
            done
        }
    }
}
export const editTodo = (id: string, done: boolean, title: string) => {
    return{
        type: ITodoActionsTypes.CHANGE_TODO,
        payload: {
            id,
            done,
            title
        }
    }
}
export const showAlert = (text: string, status: string) => {
    return {
        type: ITodoActionsTypes.SHOW_ALERT,
        payload: text,
        status
    }
}
export const hideAlert = () => {
    return {
        type: ITodoActionsTypes.HIDE_ALERT
    }
}