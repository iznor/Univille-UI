import { uiActions } from './uiActions';
import { authApi } from 'serverApi';
import {ActionTypes} from '../actionTypes';
import {dataActions} from "./dataActions";

export const userActions = {
  setUser: (userState) => {
    return {
      type: ActionTypes.SET_USER,
      payload: userState,
    };
  },
  setUserInfo: (userInfo) => {
    return {
      type: ActionTypes.SET_USER_INFO,
      payload: userInfo,
    };
  },
  setAuth: (isAuth, token) => {
    return {
      type: ActionTypes.SET_AUTH,
      payload: { isAuth, token },
    };
  },
  logOut: () => {
    return {
      type: ActionTypes.LOG_OUT,
    };
  },
  logIn: (email, password) => {
    return async (dispatch) => {
      try {
        dispatch(uiActions.setLoader(true));
        const response = await authApi.login(email, password);
        const { token, user } = response.data;
        dispatch(userActions.setAuth(true, token));
        dispatch(userActions.setUserInfo(user));
        dispatch(dataActions.setClasses(user.school.classes));
        // dispatch(dataActions.getTeacherGames())
        dispatch(uiActions.setSuccess('You have successfully logged in'));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  signup: (firstName, lastName, email, password, school) => {
    return async (dispatch) => {
      try {
        dispatch(uiActions.setLoader(true));
        const response = await authApi.signup({
          firstName,
          lastName,
          email,
          password,
          school,
        });
        const { _id: id } = response.data;
        dispatch(userActions.setUserInfo({ firstName, lastName, email, id }));
        dispatch(userActions.setUser({ signedUp: true }));
        dispatch(uiActions.setSuccess('You have successfully signed up'));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
};
