import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/ActionTypes';
import { setCookie } from '../utils';

const initialState: IUserInfo = {
  token: '',
  name: '',
  email: '',
  phone: '',
};

export interface IUserInfo {
  token?: string;
  name?: string;
  email?: string;
  phone?: string;
}

interface IAction {
  type: string;
  payload: IUserInfo;
}

export default function user(state = initialState, action: IAction) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      if (action.payload.token) setCookie('token', action.payload.token, 7);
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: '',
        name: '',
        email: '',
        phone: '',
      };
    default:
      return state;
  }
}
