const combination = require('../../../redux/reducers/index');

describe.skip('index.js', () => {
  test('combination', () => {
    const condition = combination();
    expect(condition);
  });

});
