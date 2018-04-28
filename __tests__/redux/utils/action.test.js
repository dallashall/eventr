const action = require('../../../redux/utils/action');

describe('action.js', () => {
  test('action', () => {
    const type = 'TYPE';
    const payload = { test: 'object' };
    const condition = action(type, payload);
    expect(condition.type).toEqual(type);
    expect(condition.payload).toEqual(payload);
  });
});
