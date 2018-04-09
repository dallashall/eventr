
const defaultState = {
  byId: {},
  ids: [],
};

module.exports = (state = defaultState, { type, payload }) => {
  console.log({ type, payload });
  return state;
};
