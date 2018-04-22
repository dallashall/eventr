
const defaultState = {
  byId: {},
  ids: [],
  current: null,
};

const stepsReducer = (state = defaultState, { type, payload }) => {
  console.log({ type, payload });
  return state;
};

module.exports = stepsReducer;
