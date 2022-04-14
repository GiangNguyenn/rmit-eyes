import { combineReducers } from 'redux';
import { usersReducer, selectedUserReducer } from './userReducer';

const reducers = combineReducers({
  allUsers: usersReducer,
  user: selectedUserReducer,
});
export default reducers;
