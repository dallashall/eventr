const {
  RECEIVE_ROLES,
  RECEIVE_ROLE,
  REMOVE_ROLE,
  REORDER_ROLES,
} = require('../../../actions/roles');
const {
  reorderArray,
  removeFromArray,
} = require('../../../utils/array');

const defaultState = {
  byId: {},
  ids: [],
};

const rolesReducer = (roles = defaultState, { type, payload }) => {
  switch (type) {
    case RECEIVE_ROLES:
      return payload;
    case RECEIVE_ROLE:
      return {
        byId: {
          ...roles.byId,
          [payload.id]: payload,
        },
        ids: [...roles.ids, payload.id],
      };
    case REORDER_ROLES:
      return {
        byId: roles.byId,
        ids: reorderArray(roles.ids, payload.prevIdx, payload.nextIdx),
      };
    case REMOVE_ROLE: {
      const newRoles = { byId: { ...roles.byId } };
      delete newRoles.byId[payload.id];
      newRoles.ids = removeFromArray(roles.ids, payload.id);
      return newRoles;
    }
    default:
      return roles;
  }
};

module.exports = rolesReducer;
