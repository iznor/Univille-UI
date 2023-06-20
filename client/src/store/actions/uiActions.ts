import {ActionTypes} from "../actionTypes";
import {IAlert, IUiState} from "../reducers/uiReducer";


export const uiActions = {
    setUi: (uiState:Partial<IUiState>) => {
        return {
            type: ActionTypes.SET_UI,
            payload: uiState,
        };
    },
    toggleDrawer: (open:boolean|undefined = undefined) => {
        return {
            type: ActionTypes.TOGGLE_DRAWER,
            payload: open,
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
    toggleDarkMode: () => {
        return {
            type: ActionTypes.TOGGLE_DARK_MODE
        };
    },
    toggleLanguage: () => {
        return {
            type: ActionTypes.TOGGLE_LANGUAGE
        };
    },
    setPage: (page:string) => {
        return {
            type: ActionTypes.SET_PAGE,
            payload: page,
        };
    }

}
