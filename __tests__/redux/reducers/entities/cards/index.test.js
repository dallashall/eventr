const cardsReducer = require('../../../../../redux/reducers/entities/cards/index');

describe.skip('index.js', () => {
  test('cardsReducer', () => {
    const condition = cardsReducer();
    expect(condition);
  });

});
