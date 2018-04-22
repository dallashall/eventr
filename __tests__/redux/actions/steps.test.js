const { stepAction } = require('../../../redux/actions/steps');

describe.skip('steps.js', () => {
  test('stepAction', () => {
    const condition = stepAction();
    expect(condition);
  });

});
