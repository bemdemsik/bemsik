import {ICompleteAction, ICreateAction, IDeleteAction, IEditAction, ITodo, ITodoActionsTypes} from "../../types/types";
import {call, Effect, put, takeEvery} from "redux-saga/effects";
import {TodoApi} from "../../api";
import {hideAlert, showAlert} from "../Actions";

const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time))
function* sagaCreateTodo(action: ICreateAction): Generator<Effect, void> {
    try {
        const todoObject: Partial<ITodo> = {
            title: action.payload,
            done: false
        }
        const todo = yield call(TodoApi.createTodo, todoObject)

        yield put({ type: ITodoActionsTypes.CREATE_TODO_SUCCESS, payload: todo})
        yield put(showAlert('Дело успешно создано','success'))
        yield call(delay, 3000)
        yield put(hideAlert())
    } catch (error) {
        yield put(showAlert('Не удалось создать дело','warning'))
    }
}

function* sagaDeleteTodo(action: IDeleteAction): Generator<Effect, void> {
    try {
        const todos = yield call(TodoApi.deleteTodo, action.payload)

        yield put({ type: ITodoActionsTypes.DELETE_TODO_SUCCESS, payload: todos})
        yield put(showAlert('Дела успешно удалено','success'))
        yield call(delay, 3000)
        yield put(hideAlert())
    } catch (error) {
        yield put(showAlert('Не удалось удалить дело','warning'))
    }
}
function* sagaGetTodos(): Generator<Effect, void, ITodo[]> {
    try {
        const todo = yield call(TodoApi.getTodos)

        yield put({ type: ITodoActionsTypes.GET_TODOS_SUCCESS, payload: todo})
        yield put(showAlert('Дела успешно загружены','success'))
        yield call(delay, 3000)
        yield put(hideAlert())
    } catch (error) {
        yield put(showAlert('Не удалось загрузить дела','warning'))
    }
}
function* sagaCompleteTodos(action: ICompleteAction<ITodo>): Generator<Effect, void> {
    try {
        const todoObject: Partial<ITodo> = {
            done: action.payload.done,
            id: action.payload.id
        }
        yield call(TodoApi.completeTodo, todoObject)

        yield put({ type: ITodoActionsTypes.COMPLETE_TODO_SUCCESS, payload: action.payload.id})
        yield put(showAlert(`Дела успешно ${action.payload.done ? 'завершено' : 'дело успешно возобнавлено'}`,'success'))
        yield call(delay, 3000)
        yield put(hideAlert())
    } catch (error) {
        yield put(showAlert('Не удалось завершить дело','warning'))
    }
}
function* sagaEditTodos(action: IEditAction): Generator<Effect, void, ITodo> {
    try {
        const todoObject: Partial<ITodo> = {
            done: action.payload.done,
            id: action.payload.id,
            title: action.payload.title
        }
        const todo = yield call(TodoApi.editTodo, todoObject)

        yield put({ type: ITodoActionsTypes.CHANGE_TODO_SUCCESS, payload: todo, id: action.payload.id})
        yield put(showAlert('Дела успешно изменено','success'))
        yield call(delay, 3000)
        yield put(hideAlert())
    } catch (error) {
        yield put(showAlert('Не удалось изменить дело','warning'))
    }
}

export function* sagaWatcher(): Generator<Effect, void> {
    yield takeEvery(ITodoActionsTypes.CREATE_TODO, sagaCreateTodo)
    yield takeEvery(ITodoActionsTypes.DELETE_TODO, sagaDeleteTodo)
    yield takeEvery(ITodoActionsTypes.GET_TODOS, sagaGetTodos)
    yield takeEvery(ITodoActionsTypes.COMPLETE_TODO, sagaCompleteTodos)
    yield takeEvery(ITodoActionsTypes.CHANGE_TODO, sagaEditTodos)
}