import { UserActionTypes } from '../constants/actionTypes';
const intialState = {
  users: [],
};
const { SET_USERS, SELECTED_USER } = UserActionTypes;

export const usersReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};

export const selectedUserReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case SELECTED_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};
