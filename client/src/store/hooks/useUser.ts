import { useCallback } from 'react';
import { userActions } from '../actions';
import { IUserState } from '../reducers';
import { useAppDispatch, useAppSelector } from '../store';

export function useUser() {
  const dispatch = useAppDispatch();
  const values: IUserState = useAppSelector((store) => store.user);

  const signup = (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    school: string
  ) => {
    dispatch(userActions.signup(firstName, lastName, email, password, school));
  };
  const logIn = (email: string, password: string) => {
    dispatch(userActions.logIn(email, password));
  };
  const logOut = () => {
    dispatch(userActions.logOut());
  };
  const setAuth = (isAuth: boolean, token = '') => {
    dispatch(userActions.setAuth(isAuth, token));
  };

  return {
    userState: values,
    userActions: {
      signup: useCallback(signup, []),
      logIn: useCallback(logIn, []),
      logOut: useCallback(logOut, []),
      setAuth: useCallback(setAuth, []),
    },
  };
}
