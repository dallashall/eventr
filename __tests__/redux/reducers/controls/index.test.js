const controlsReducer = require('../../../../redux/reducers/controls/index');

describe.skip('index.js', () => {
  test('controlsReducer', () => {
    const condition = controlsReducer();
    expect(condition);
  });

});
