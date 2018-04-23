const action = require('../utils/action');

const RECEIVE_USERS = 'RECEIVE_USERS';
const RECEIVE_USER = 'RECEIVE_USER';
const REMOVE_USER = 'REMOVE_USER';
const REORDER_USERS = 'REORDER_USERS';

const stepAction = function stepAction() {
  return action();
};

module.exports = {
  RECEIVE_USERS,
  RECEIVE_USER,
  REMOVE_USER,
  REORDER_USERS,
  stepAction,
};
