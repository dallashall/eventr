import { SET_CURRENT_STEP } from '../../actions/controls';

const defaultState = {
  currentCard: 0
};

export default (controls = defaultState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_STEP:
      return { ...controls, ...payload };
    default:
      return controls;
  }
};
