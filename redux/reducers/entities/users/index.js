const {
  RECEIVE_USERS,
  RECEIVE_USER,
  REMOVE_USER,
  REORDER_USERS,
} = require('../../../actions/users');
const reorderArray = require('../../../utils/array');

const defaultState = {
  byId: {},
  ids: [],
};

const usersReducer = (users = defaultState, { type, payload }) => {
  switch (type) {
    case RECEIVE_USERS:
      return { ...payload };
    case RECEIVE_USER:
      return {
        byId: { ...users.byId, [payload.id]: payload },
        ids: [...users.ids, payload.id],
      };
    case REMOVE_USER: {
      const newUsers = {
        byId: { ...users.byId },
      };
      delete newUsers.byId[payload.id];
      const idx = users.ids.indexOf(payload.id);
      newUsers.ids = users.ids.slice(0, idx).concat(users.ids.slice(idx + 1));
      return newUsers;
    }
    case REORDER_USERS:
      return {
        byId: { ...users.byId },
        ids: reorderArray(users.ids, payload.prevIdx, payload.nextIdx),
      };
    default:
      return users;
  }
};

module.exports = usersReducer;
