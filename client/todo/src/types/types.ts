export enum ITodoActionsTypes {
    CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS',
    CREATE_TODO = 'CREATE_TODO',
    GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS',
    GET_TODOS = 'GET_TODOS',
    CHANGE_TODO_SUCCESS = 'CHANGE_TODO_SUCCESS',
    CHANGE_TODO = 'CHANGE_TODO',
    COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS',
    COMPLETE_TODO = 'COMPLETE_TODO',
    DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
    DELETE_TODO = 'DELETE_TODO',
    SHOW_ALERT = 'SHOW_ALERT',
    HIDE_ALERT = 'HIDE_ALERT'
}
export interface ITodo {
    id: string;
    title: string;
    done: boolean;
}
export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
}
export interface ITodoState {
    todos: ITodo[];
}
export interface IUserState {
    users: IUser[];
}
export interface IAlertState {
    alertText: string
    alertStatus: string
}
export interface ITodoReducer {
    todoReducer: ITodoState
}
export interface IUserReducer {
    userReducer: IUserState
}
export interface IAlertReducer {
    alertReducer: IAlertState
}
export interface IEditTodo {
    title: string,
    id: string,
    done: boolean
}
export interface ICreateAction {
    type: ITodoActionsTypes.CREATE_TODO_SUCCESS | ITodoActionsTypes.CREATE_TODO;
    payload: string;
}
export interface IDeleteAction {
    type: ITodoActionsTypes.DELETE_TODO_SUCCESS | ITodoActionsTypes.DELETE_TODO;
    payload: string;
}
export interface IGetAction {
    type: ITodoActionsTypes.GET_TODOS_SUCCESS | ITodoActionsTypes.GET_TODOS;
    payload?: ITodoState
}
export interface ICompleteAction<T> {
    type: ITodoActionsTypes.COMPLETE_TODO_SUCCESS | ITodoActionsTypes.COMPLETE_TODO;
    payload: T
}
export interface IEditAction {
    type: ITodoActionsTypes.CHANGE_TODO_SUCCESS | ITodoActionsTypes.CHANGE_TODO;
    payload: IEditTodo;
    id: string
}
export interface IShowAlertAction {
    type: ITodoActionsTypes.SHOW_ALERT;
    payload: string;
    status: string
}
export interface IHideAlertAction {
    type: ITodoActionsTypes.HIDE_ALERT;
}
export type ITodoAction = ICreateAction | IDeleteAction | IGetAction | ICompleteAction<ITodo | string> | IEditAction
export type IAlertAction = IShowAlertAction | IHideAlertAction

