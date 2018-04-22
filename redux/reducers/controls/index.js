const { SET_CURRENT_STEP } = require('../../actions/controls');

const defaultState = {
  currentCard: 0,
};

const controlsReducer = (controls = defaultState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_STEP:
      return { ...controls, ...payload };
    default:
      return controls;
  }
};

module.exports = controlsReducer;
