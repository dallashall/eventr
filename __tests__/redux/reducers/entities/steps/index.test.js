const stepsReducer = require('../../../../../redux/reducers/entities/steps/index');
const {
  step3,
  steps2,
  steps3,
  blankTestStore,
} = require('../../store');
const {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP,
  REORDER_STEPS,
} = require('../../../../../redux/actions/steps');

describe('index.js', () => {
  test(RECEIVE_STEPS, () => {
    const action = {
      type: RECEIVE_STEPS,
      payload: steps3,
    };
    const condition = stepsReducer(blankTestStore.steps, action);
    expect(condition).toEqual(steps3);
  });
  test(RECEIVE_STEP, () => {
    const action = {
      type: RECEIVE_STEP,
      payload: step3,
    };
    const condition = stepsReducer(steps2, action);
    expect(condition).toEqual(steps3);
  });
  test(REORDER_STEPS, () => {
    const action = {
      type: REORDER_STEPS,
      payload: {
        prevIdx: 0,
        nextIdx:2,
      },
    };
    const condition = stepsReducer(steps3, action);
    expect(condition.ids).toEqual([2, 3, 1]);
  });
  test(REMOVE_STEP, () => {
    const action = {
      type: REMOVE_STEP,
      payload: {
        id: step3.id,
      },
    };
    const condition = stepsReducer(steps3, action);
    expect(condition).toEqual(steps2);
  });
});
