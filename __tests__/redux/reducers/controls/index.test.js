const controlsReducer = require('../../../../redux/reducers/controls/index');
const { SET_CURRENT_STEP } = require('../../../../redux/actions/controls');
const {
  blankTestStore,
} = require('../store');

describe('controlsReducer.js', () => {
  test('init', () => {
    const condition = controlsReducer(undefined, { type: '@@INIT' });
    expect(condition).toEqual(blankTestStore.controls);
  });
  test(SET_CURRENT_STEP, () => {
    const currentCard = 1;
    const condition = controlsReducer(blankTestStore.controls, { type: SET_CURRENT_STEP, payload: { currentCard } });
    expect(condition.currentCard).toEqual(currentCard);
  });
});
