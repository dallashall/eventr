const cardsReducer = require('../../../../../redux/reducers/entities/cards/index');
const {
  card3,
  cards2,
  cards3,
  blankTestStore,
} = require('../../store');
const {
  RECEIVE_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD,
  REORDER_CARDS,
} = require('../../../../../redux/actions/cards');

describe('index.js', () => {
  test(RECEIVE_CARDS, () => {
    const action = {
      type: RECEIVE_CARDS,
      payload: cards3,
    };
    const condition = cardsReducer(blankTestStore.cards, action);
    expect(condition).toEqual(cards3);
  });
  test(RECEIVE_CARD, () => {
    const action = {
      type: RECEIVE_CARD,
      payload: card3,
    };
    const condition = cardsReducer(cards2, action);
    expect(condition).toEqual(cards3);
  });
  test(REORDER_CARDS, () => {
    const action = {
      type: REORDER_CARDS,
      payload: {
        prevIdx: 0,
        nextIdx:2,
      },
    };
    const condition = cardsReducer(cards3, action);
    expect(condition.ids).toEqual([2, 3, 1]);
  });
  test(REMOVE_CARD, () => {
    const action = {
      type: REMOVE_CARD,
      payload: {
        id: card3.id,
      },
    };
    const condition = cardsReducer(cards3, action);
    expect(condition).toEqual(cards2);
  });
});
