const { combineReducers } = require('redux');
const entities = require('./entities');
const controls = require('./controls');

const rootReducer = combineReducers({
  entities,
  controls,
});

module.exports = rootReducer;
