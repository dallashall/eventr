const { roleAction } = require('../../../redux/actions/roles');

describe.skip('roles.js', () => {
  test('roleAction', () => {
    const condition = roleAction();
    expect(condition);
  });

});
