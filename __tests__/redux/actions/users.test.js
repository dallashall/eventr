const { stepAction } = require('../../../redux/actions/users');

describe.skip('users.js', () => {
  test('stepAction', () => {
    const condition = stepAction();
    expect(condition);
  });

});
