import { AuthActionTypes } from '../constants/actionTypes';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case AuthActionTypes.SET_CURRENT_USER:
      return [...state, action.payload];
    default: return state;
  }
}
