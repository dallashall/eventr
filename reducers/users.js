const usersReducer = (users = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return { ...users, [action.user.id]: action.user };
    default:
      return users;
  }
}

export default usersReducer;
