import {ActionTypes} from "../actionTypes";
import {IAlert, IUiState} from "../reducers/uiReducer";


export const uiActions = {
    setUi: (uiState:Partial<IUiState>) => {
        return {
            type: ActionTypes.SET_UI,
            payload: uiState,
        };
    },
    setLoader: (state) => {
        return {
            type: ActionTypes.SET_LOADER,
            payload: state,
        };
    },
    setAlert: (message, alertObj:Partial<IAlert>={}) => {
        return {
            type: ActionTypes.SET_ALERT,
            payload: {message, open: true,severity:alertObj?.severity??'error', ...alertObj},
        };
    },
    setSuccess: (message, alertObj:Partial<IAlert>={}) => {
        return {
            type: ActionTypes.SET_SUCCESS,
            payload: {message, open: true,severity:alertObj?.severity??'success', ...alertObj},
        };
    },
    closeSnackbar: () => {
        return {
            type: ActionTypes.CLOSE_SNACKBAR,
        };
    },
    setTheme: (theme) => {
        return {
            type: ActionTypes.SET_THEME,
            payload: theme,
        };
    },
    setLang: (lang) => {
        return {
            type: ActionTypes.SET_LANG,
            payload: lang,
        };
    }

}
