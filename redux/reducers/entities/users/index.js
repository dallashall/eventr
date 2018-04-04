import {
  RECEIVE_USER,
  REMOVE_USER,
} from '../../../actions/users';

const defaultState = {
  byId: {},
  ids: [],
};

export default (users = defaultState, { type, payload }) => {
  switch (type) {
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
      newUsers.ids = Object.keys(newUsers.byId);
      return newUsers;
    }
    default:
      return users;
  }
};
