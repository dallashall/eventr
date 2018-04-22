const reorderArray = require('../../../redux/utils/array');

describe.skip('array.js', () => {
  test('reorderArray', () => {
    const arg0 = {};
    const arg1 = {};
    const arg2 = {};
    const condition = reorderArray(arg0, arg1, arg2);
    expect(condition);
  });

});
