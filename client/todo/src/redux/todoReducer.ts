import {ITodoAction, ITodoActionsTypes, ITodoState} from "../types/types";

export const initialState = {
    todos: []
}
export const todoReducer = (state: ITodoState = initialState, action: ITodoAction) => {
    switch (action.type) {
        case ITodoActionsTypes.CREATE_TODO_SUCCESS:
            return { todos: [...state.todos, action.payload]}
        case ITodoActionsTypes.DELETE_TODO_SUCCESS:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        case ITodoActionsTypes.GET_TODOS_SUCCESS:
            return { ...state, todos: action.payload}
        case ITodoActionsTypes.COMPLETE_TODO_SUCCESS:{
            const newTodos = [...state.todos]
            const completeId = state.todos.findIndex(todo => todo.id === action.payload)

            if(completeId === -1) {
                return state
            }

            newTodos[completeId].done = !newTodos[completeId].done
            return {...state, todos: newTodos }
        }
        case ITodoActionsTypes.CHANGE_TODO_SUCCESS:{
            const newTodos = [...state.todos]
            const completeId = newTodos.findIndex(todo => todo.id === action.id)

            if(completeId === -1) {
                return state
            }

            newTodos[completeId] = action.payload
            return {...state, todos: newTodos }
        }
        default:
            return state;
    }
}