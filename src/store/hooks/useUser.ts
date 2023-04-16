import {useCallback} from 'react';
import {userActions} from "../actions";
import {IUserState} from "../reducers";
import {useAppDispatch, useAppSelector} from "../store";

export function useUser() {
    const dispatch = useAppDispatch();
    const values:IUserState = useAppSelector(store => store.user);

    const setUser = (userState: Partial<IUserState>) => {
        dispatch(userActions.setUser(userState))
    }
    const setUserInfo= (userInfo: Partial<IUserState>) => {
        dispatch(userActions.setUserInfo(userInfo))
    }
    const setAuth = (isAuth: boolean,token = "") => {
        dispatch(userActions.setAuth(isAuth,token))
    }

    const logOut = () => {
        dispatch(userActions.logOut())
    }
    const logIn = (email: string,password: string) => {
        dispatch(userActions.logIn(email,password))
    }
    const signup = (firstName: string,lastName: string,email: string,password: string) => {
        dispatch(userActions.signup(firstName,lastName,email,password))
    }
    const tgAuth = (phoneNumber: string,password: string) => {
        dispatch(userActions.tgAuth(phoneNumber,password))
    }

    const tgVerify = (phoneNumber: string,code: string) => {
        dispatch(userActions.tgVerify(phoneNumber,code))
    }

    return {
        userState: values,
        userActions: {
            setUser: useCallback(setUser, []),
            setUserInfo: useCallback(setUserInfo, []),
            setAuth: useCallback(setAuth, []),
            logOut: useCallback(logOut, []),
            logIn: useCallback(logIn, []),
            signup: useCallback(signup, []),
            tgAuth: useCallback(tgAuth, []),
            tgVerify: useCallback(tgVerify, []),

        }
    }

}
