const action = require('../../../redux/utils/action');

describe.skip('action.js', () => {
  test('action', () => {
    const arg0 = {};
    const arg1 = {};
    const condition = action(arg0, arg1);
    expect(condition);
  });

});
