
const defaultState = {
  byId: {},
  ids: [],
};

const rolesReducer = (state = defaultState, { type, payload }) => {
  console.log({ type, payload });
  return state;
};

module.exports = rolesReducer;
