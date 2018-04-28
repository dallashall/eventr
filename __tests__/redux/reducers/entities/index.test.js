const { blankTestStore } = require('../store');
const entitiesReducer = require('../../../../redux/reducers/entities/index');

describe('index.js', () => {
  test('entitiesReducer', () => {
    const condition = entitiesReducer(blankTestStore.entities, { type: '@@INIT' });
    expect(condition).toEqual(blankTestStore.entities);
  });
});
