const reorderArray = require('../../../redux/utils/array');

describe('array.js', () => {
  test('reorderArray', () => {
    const arg0 = [1, 2, 3, 4];
    const arg1 = 0;
    const arg2 = 1;
    const condition = reorderArray(arg0, arg1, arg2);
    expect(condition).toEqual([2, 1, 3, 4]);
  });

});
