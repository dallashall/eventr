
const defaultState = {
  byId: {},
  ids: [],
};

const cardsReducer = (state = defaultState, { type, payload }) => {
  console.log({ type, payload });
  return state;
};

module.exports = cardsReducer;
