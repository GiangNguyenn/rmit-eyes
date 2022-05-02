import { combineReducers } from 'redux';
import { usersReducer, selectedUserReducer } from './usersReducer';
import adminReducer from "./adminReducer";
const reducers = combineReducers({
  admin: adminReducer,
});
export default reducers;
