const { combineReducers } = require('redux');
const cards = require('./cards');
const roles = require('./roles');
const steps = require('./steps');
const users = require('./users');

const entitiesReducer = combineReducers({
  cards,
  roles,
  steps,
  users,
});

module.exports = entitiesReducer;
