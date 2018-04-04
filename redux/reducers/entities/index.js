import { combineReducers } from 'redux';
import cards from './cards';
import roles from './roles';
import steps from './steps';
import users from './users';

export default combineReducers({
  cards,
  roles,
  steps,
  users,
});
