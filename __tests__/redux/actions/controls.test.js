const controlAction = require('../../../redux/actions/controls');

describe.skip('controls.js', () => {
  test('controlAction', () => {
    const arg0 = {};
    const condition = controlAction(arg0);
    expect(condition);
  });

});
