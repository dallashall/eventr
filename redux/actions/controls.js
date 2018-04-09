const action = require('../utils/action');

const SET_CURRENT_STEP = 'SET_CURRENT_STEP';
const HYDRATE = 'HYDRATE';

const controlAction = function controlAction(controls) {
  return action(SET_CURRENT_STEP, controls);
};

controlAction.SET_CURRENT_STEP = SET_CURRENT_STEP;
controlAction.HYDRATE = HYDRATE;

module.exports = controlAction;
