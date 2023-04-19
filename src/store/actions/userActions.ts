import { uiActions } from './uiActions';
import { authApi } from 'serverApi';

export const userActions = {
  setUser: (userState) => {
    return {
      type: 'SET_USER',
      payload: userState,
    };
  },
  setUserInfo: (userInfo) => {
    return {
      type: 'SET_USER_INFO',
      payload: userInfo,
    };
  },
  setAuth: (isAuth, token) => {
    return {
      type: 'SET_AUTH',
      payload: { isAuth, token },
    };
  },
  logOut: () => {
    return {
      type: 'LOG_OUT',
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
