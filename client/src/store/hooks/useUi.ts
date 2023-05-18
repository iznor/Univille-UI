import {useCallback} from 'react';
import {uiActions} from "../actions";
import {IAlert, IUiState} from "../reducers";
import {useAppDispatch, useAppSelector} from "../store";

export function useUi() {
    const dispatch = useAppDispatch();
    const values:IUiState = useAppSelector(store => store.ui);

    const setUi = (uiState: Partial<IUiState>) => {
        dispatch(uiActions.setUi(uiState))
    }
    const setTheme = (theme: string) => {
        dispatch(uiActions.setTheme(theme))
    }
    const setLoader = (state: boolean) => {
        dispatch(uiActions.setLoader(state))
    }
    const setAlert = (message: string, alertObj: Partial<IAlert> = {}) => {
        dispatch(uiActions.setAlert(message,alertObj))
    }
    const setSuccess = (message: string, alertObj: Partial<IAlert> = {}) => {
        dispatch(uiActions.setSuccess(message,alertObj))
    }
    const closeSnackbar = () => {
        dispatch(uiActions.closeSnackbar())
    }

    const setLang = (lang: string) => {
        dispatch(uiActions.setLang(lang))
    }

    return {
        uiState: values,
        uiActions: {
            setUi: useCallback(setUi, []),
            setTheme: useCallback(setTheme, []),
            setLoader: useCallback(setLoader, []),
            setAlert: useCallback(setAlert, []),
            setSuccess: useCallback(setSuccess, []),
            closeSnackbar: useCallback(closeSnackbar, []),
            setLang: useCallback(setLang, []),
        }
    }

}
