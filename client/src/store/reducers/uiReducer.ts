import produce from 'immer';
import {ActionTypes} from '../actionTypes';

export const initialUiState:IUiState ={
    theme: "light",
    lang: "en",
    loading: false,
    alert:{
        open: false,
        message: "Error",
        severity: "error",
        position: "bl",
        timeout: 3000,
    }
}


export const uiReducer = (state = initialUiState, action) => {
    return produce(state, (draft) => {
        const {type, payload} = action;
        switch (type) {
            case ActionTypes.SET_UI:
                Object.assign(draft, payload);
                break;
            case ActionTypes.SET_THEME:
                draft.theme = payload;
                break;
            case ActionTypes.SET_LOADER:
                draft.loading = payload;
                break;
            case ActionTypes.SET_ALERT:
                draft.loading = false;
                Object.assign(draft.alert, payload);
                break;
            case ActionTypes.SET_SUCCESS:
                draft.loading = false;
                Object.assign(draft.alert, payload);
                break;
            case ActionTypes.CLOSE_SNACKBAR:
                draft.alert.open = false;
                break;
            case ActionTypes.LOG_OUT:
                draft=initialUiState;
                break;
            default:
                break;
        }
    })
}

export interface IUiState {
    theme: string;
    lang: string;
    loading: boolean;
    alert: IAlert;
}

export interface IAlert{
    open: boolean;
    message: string;
    severity: 'error' | 'warning' | 'success' | 'info';
    position: 'bl' | 'br' | 'tl' | 'tr';
    timeout: number;
}
