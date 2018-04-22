const stepsReducer = require('../../../../../redux/reducers/entities/steps/index');

describe.skip('index.js', () => {
  test('stepsReducer', () => {
    const condition = stepsReducer();
    expect(condition);
  });

});
