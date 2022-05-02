import axios from '../../http-common';
import { useNavigate } from 'react-router-dom';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { AuthActionTypes } from '../constants/actionTypes';

export function setCurrentUser(user) {
  return {
    type: AuthActionTypes.SET_CURRENT_USER,
    user,
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export async function login(username, password) {
  const response = await axios.post('/auth/login', { username, password });
  return (dispatch) => {
    if (response.status === 200) {
      const token = response.data.accessToken;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      console.log(jwtDecode(token));
      dispatch(setCurrentUser(jwtDecode(token)));
      useNavigate('/dashboard/admin');
    }
  };
}
