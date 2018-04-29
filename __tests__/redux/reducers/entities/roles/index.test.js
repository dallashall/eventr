const rolesReducer = require('../../../../../redux/reducers/entities/roles/index');
const {
  role3,
  roles2,
  roles3,
  blankTestStore,
} = require('../../store');
const {
  RECEIVE_ROLES,
  RECEIVE_ROLE,
  REORDER_ROLES,
  REMOVE_ROLE,
} = require('../../../../../redux/actions/roles');

describe('index.js', () => {
  test(RECEIVE_ROLES, () => {
    const action = {
      type: RECEIVE_ROLES,
      payload: roles3,
    };
    const condition = rolesReducer(blankTestStore.role, action);
    expect(condition).toEqual(roles3);
  });
  test(RECEIVE_ROLE, () => {
    const action = {
      type: RECEIVE_ROLE,
      payload: role3,
    };
    const condition = rolesReducer(roles2, action);
    expect(condition).toEqual(roles3);
  });
  test(REORDER_ROLES, () => {
    const action = {
      type: REORDER_ROLES,
      payload: {
        prevIdx: 0,
        nextIdx: 2,
      },
    };
    const condition = rolesReducer(roles3, action);
    expect(condition.ids).toEqual([2, 3, 1]);
  });
  test(REMOVE_ROLE, () => {
    const action = {
      type: REMOVE_ROLE,
      payload: {
        id: role3.id,
      },
    };
    const condition = rolesReducer(roles3, action);
    expect(condition).toEqual(roles2);
  });
});
