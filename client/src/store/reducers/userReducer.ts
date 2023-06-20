import produce from 'immer';
import { ActionTypes } from '../actionTypes';

export const initialUserState: IUserState = {
  token: '',
  isAuth: false,
  signedUp: false,
  user: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    school: null,
  },
};

export const userReducer = (state = initialUserState, action) => {
  return produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case ActionTypes.SET_USER:
        Object.assign(draft, payload);
        draft.user = payload;
        break;
      case ActionTypes.SET_USER_INFO:
        Object.assign(draft.user, payload);
        break;
      case ActionTypes.SET_AUTH:
        Object.assign(draft, payload);
        break;
      case ActionTypes.LOG_OUT:
        draft = initialUserState;
        break;
      default:
        break;
    }
  });
};


export interface IUserState {
  token: string;
  isAuth: boolean;
  signedUp: boolean;
  user: IUserInfoState;
}
