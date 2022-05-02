import axios from '../../http-common';
import { useNavigate } from 'react-router-dom';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { AuthActionTypes } from '../constants/actionTypes';

export function setCurrentUser(user) {
  return {
    type: AuthActionTypes.SET_CURRENT_USER,
    payload: user
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export const login = (username, password) => {
  return async (dispatch ) => {
    const response = await axios.post('/auth/login', { username, password });
    const token = response.data.accessToken;
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    console.log(jwtDecode(token));
    dispatch({type: 'SET_ADMIN', payload: response.data})
    useNavigate('/dashboard/admin');
  };
}
