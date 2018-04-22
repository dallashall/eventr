const { getRedis, setRedis, delRedis } = require('../../utils/redisPromise');

describe.skip('redisPromise.js', () => {
  test('getRedis', () => {
    const arg0 = {};
    const condition = getRedis(arg0);
    expect(condition);
  });

  test('setRedis', () => {
    const arg0 = {};
    const condition = setRedis(arg0);
    expect(condition);
  });

  test('delRedis', () => {
    const arg0 = {};
    const condition = delRedis(arg0);
    expect(condition);
  });

});
