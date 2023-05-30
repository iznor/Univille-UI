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
    const toggleDrawer = (open:boolean|undefined = undefined) => {
        dispatch(uiActions.toggleDrawer(open))
    }
    const closeDrawer = () => {
        dispatch(uiActions.toggleDrawer(false))
    }
    const openDrawer = () => {
        dispatch(uiActions.toggleDrawer(true))
    }
    const toggleDarkMode = () => {
        dispatch(uiActions.toggleDarkMode())
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

    const toggleLanguage = () => {
        dispatch(uiActions.toggleLanguage())
    }

    const setPage = (page: string) => {
        dispatch(uiActions.setPage(page))
    }

    return {
        uiState: values,
        uiActions: {
            setUi: useCallback(setUi, []),
            toggleDarkMode: useCallback(toggleDarkMode, []),
            toggleDrawer: useCallback(toggleDrawer, []),
            closeDrawer: useCallback(closeDrawer, []),
            openDrawer: useCallback(openDrawer, []),
            setLoader: useCallback(setLoader, []),
            setAlert: useCallback(setAlert, []),
            setSuccess: useCallback(setSuccess, []),
            closeSnackbar: useCallback(closeSnackbar, []),
            setPage: useCallback(setPage, []),
            toggleLanguage: useCallback(toggleLanguage, []),
        }
    }

}
