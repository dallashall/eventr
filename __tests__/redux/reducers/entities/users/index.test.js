const usersReducer = require('../../../../../redux/reducers/entities/users/index');

describe.skip('index.js', () => {
  test('usersReducer', () => {
    const condition = usersReducer();
    expect(condition);
  });

});
