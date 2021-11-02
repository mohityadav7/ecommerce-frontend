import * as types from '../constants/ActionTypes';
import { IUserInfo } from '../reducers/user';

export const loginSuccess = (userData: IUserInfo) => ({
  type: types.LOGIN_SUCCESS,
  payload: userData,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
  payload: {},
});
