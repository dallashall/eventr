import { combineReducers } from 'redux';
import users from './users';
import cards from './cards';

export default combineReducers({
  users,
  cards,
});
