const action = require('../../../redux/actions/creator');

describe.skip('creator.js', () => {
  test('action', () => {
    const arg0 = {};
    const arg1 = {};
    const condition = action(arg0, arg1);
    expect(condition);
  });

});
