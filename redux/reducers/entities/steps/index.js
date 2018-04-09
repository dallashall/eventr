
const defaultState = {
  byId: {},
  ids: [],
  current: null,
};

module.exports = (state = defaultState, { type, payload }) => {
  console.log({ type, payload });
  return state;
};
