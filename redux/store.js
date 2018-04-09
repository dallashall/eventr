const { createStore } = require('redux');
const rootReducer = require('./reducers');

const loadStore = (preloadedState = {}) => createStore(rootReducer, preloadedState);

module.exports = loadStore;
