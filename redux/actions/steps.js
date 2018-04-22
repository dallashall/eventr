const action = require('../utils/action');

const RECEIVE_STEP = 'RECEIVE_STEP';
const REMOVE_STEP = 'REMOVE_STEP';
const REORDER_STEPS = 'REORDER_STEPS';

const stepAction = function stepAction() {
  return action();
};

module.exports = {
  RECEIVE_STEP,
  REMOVE_STEP,
  REORDER_STEPS,
  stepAction,
};
