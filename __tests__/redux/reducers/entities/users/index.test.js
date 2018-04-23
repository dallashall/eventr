const usersReducer = require('../../../../../redux/reducers/entities/users/index');
const {
  user3,
  users2,
  users3,
  blankTestStore,
} = require('../../store');
const {
  RECEIVE_USERS,
  RECEIVE_USER,
  REMOVE_USER,
  REORDER_USERS,
} = require('../../../../../redux/actions/users');

describe('usersReducer', () => {
  test('initializes to default state', () => {
    const condition = usersReducer(undefined, { type: '@@INIT' });
    expect(condition).toEqual(blankTestStore.entities.users);
  });
  test('replaces users with received', () => {
    const condition = usersReducer(undefined, { type: RECEIVE_USERS, payload: users2 });
    expect(condition).toEqual(users2);
  });
  test('adds a single user', () => {
    const condition = usersReducer(users2, { type: RECEIVE_USER, payload: user3 });
    expect(condition).toEqual(users3);
  });
  test('rearranges user ids', () => {
    const condition = usersReducer(users3, { type: REORDER_USERS, payload: { prevIdx: 0, nextIdx: 2 } });
    expect(condition.ids).toEqual([2, 3, 1]);
  });
  test('removes a single user', () => {
    const condition = usersReducer(users3, { type: REMOVE_USER, payload: { id: 3 } });
    expect(condition).toEqual(users2);
  });
});
