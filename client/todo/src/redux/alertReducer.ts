import {IAlertAction, IAlertState, ITodoActionsTypes} from "../types/types";

const initialState = {
    alertText: '',
    alertStatus: ''
}
export const alertReducer = (state: IAlertState = initialState, action: IAlertAction) => {
    switch (action.type) {
        case ITodoActionsTypes.SHOW_ALERT:
            return {alertText: action.payload, alertStatus: action.status}
        case ITodoActionsTypes.HIDE_ALERT:
            return {alertText: '', alertStatus: ''}
        default:
            return state;
    }
}