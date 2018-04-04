
const defaultState = {
  byId: {},
  ids: [],
};

export default (state = defaultState, { type, payload }) => {
  console.log({ type, payload });
  return state;
};
