const {
  RECEIVE_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD,
  REORDER_CARDS,
} = require('../../../actions/cards');
const {
  reorderArray,
  removeFromArray,
} = require('../../../utils/array');

const defaultState = {
  byId: {},
  ids: [],
};

const cardsReducer = (cards = defaultState, { type, payload }) => {
  switch (type) {
    case RECEIVE_CARDS:
      return payload;
    case RECEIVE_CARD:
      return {
        byId: {
          ...cards.byId,
          [payload.id]: payload,
        },
        ids: [...cards.ids, payload.id],
      };
    case REMOVE_CARD: {
      const newCards = {
        byId: { ...cards.byId },
      };
      delete newCards.byId[payload.id];
      newCards.ids = removeFromArray(cards.ids, payload.id);
      return newCards;
    }
    case REORDER_CARDS:
      return {
        byId: { ...cards.byId },
        ids: reorderArray(cards.ids, payload.prevIdx, payload.nextIdx),
      };
    default:
      return cards;
  }
};

module.exports = cardsReducer;
