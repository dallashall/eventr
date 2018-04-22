const loadStore = require('../../redux/store');

describe.skip('store.js', () => {
  test('loadStore', () => {
    const condition = loadStore();
    expect(condition);
  });

});
