import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import { setCurrentUser } from '../actions/authActions';
import authReducer from '../reducers/authReducer';
const reducers = { auth: authReducer };

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : (f) => f),
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

export default store;
