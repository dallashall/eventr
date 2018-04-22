const { cardAction } = require('../../../redux/actions/cards');

describe.skip('cards.js', () => {
  test('cardAction', () => {
    const condition = cardAction();
    expect(condition);
  });

});
