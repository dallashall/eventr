const { combineReducers } = require('redux');
const entities = require('./entities');
const controls = require('./controls');

module.exports = combineReducers({
  entities,
  controls,
});
