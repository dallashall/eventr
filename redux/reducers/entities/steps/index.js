
const defaultState = {
  byId: {},
  ids: [],
  current: null,
};

export default (state = defaultState, { type, payload }) => {
  console.log({ type, payload });
  return state;
};
