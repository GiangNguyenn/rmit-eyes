// Create a slice for auth and export both action and authSlice

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { user: {} };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = {};
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
