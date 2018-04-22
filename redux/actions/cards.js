const action = require('../utils/action');

const RECEIVE_CARD = 'RECEIVE_CARD';
const REMOVE_CARD = 'REMOVE_CARD';
const REORDER_CARDS = 'REORDER_CARDS';

const cardAction = function cardAction() {
  return action();
};

module.exports = {
  RECEIVE_CARD,
  REMOVE_CARD,
  REORDER_CARDS,
  cardAction,
};
