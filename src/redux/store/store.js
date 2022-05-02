import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import authSlice from './authSlice';

const reducers = { auth: authSlice.reducer };

const store = createStore(
reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
