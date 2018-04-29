const {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP,
  REORDER_STEPS,
} = require('../../../actions/steps');
const {
  reorderArray,
  removeFromArray,
} = require('../../../utils/array');

const defaultState = {
  byId: {},
  ids: [],
  current: null,
};

const stepsReducer = (steps = defaultState, { type, payload }) => {
  switch (type) {
    case RECEIVE_STEPS:
      return payload;
    case RECEIVE_STEP:
      return {
        byId: {
          ...steps.byId,
          [payload.id]: payload,
        },
        ids: [...steps.ids, payload.id],
      };
    case REORDER_STEPS:
      return {
        byId: steps.byId,
        ids: reorderArray(steps.ids, payload.prevIdx, payload.nextIdx),
      };
    case REMOVE_STEP: {
      const newsteps = { byId: { ...steps.byId } };
      delete newsteps.byId[payload.id];
      newsteps.ids = removeFromArray(steps.ids, payload.id);
      return newsteps;
    }
    default:
      return steps;
  }
};

module.exports = stepsReducer;
