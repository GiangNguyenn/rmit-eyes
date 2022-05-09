import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import { setCurrentUser } from '../actions/authActions';
import authReducer from '../reducers/authReducer';
import adminReducer from "../reducers/adminReducer";
import {selectedUserReducer, usersReducer} from "../reducers/usersReducer";
const reducers = { admin: adminReducer, users: usersReducer, selectedUser: selectedUserReducer};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

export default store;
