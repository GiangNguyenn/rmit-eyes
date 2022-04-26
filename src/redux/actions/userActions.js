import { UserActionTypes } from '../constants/actionTypes';

export const setUsers = (users) => {
  return {
    type: UserActionTypes.SET_USERS,
    payload: users,
  };
};
