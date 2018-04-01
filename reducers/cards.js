const cardsReducer = (cards = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_CARD':
      return { ...cards, [action.card.id]: action.card };
    default:
      return cards;
  }
}

export default cardsReducer;
