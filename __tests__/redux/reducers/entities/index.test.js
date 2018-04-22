const combination = require('../../../../redux/reducers/entities/index');

describe.skip('index.js', () => {
  test('combination', () => {
    const condition = combination();
    expect(condition);
  });

});
