import { combineReducers } from 'redux';
import { usersReducer, selectedUserReducer } from './usersReducer';

const reducers = combineReducers({
  allUsers: usersReducer,
  user: selectedUserReducer,
});
export default reducers;
