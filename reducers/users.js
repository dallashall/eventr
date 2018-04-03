const usersReducer = (users = {}, { type, payload }) => {
  switch (type) {
    case 'RECEIVE_USER':
      return { ...users, [payload.id]: payload };
    case 'REMOVE_USER': {
      const newUsers = { ...users };
      delete users[payload.id];
      return newUsers;
    }
    default:
      return users;
  }
}

export default usersReducer;
