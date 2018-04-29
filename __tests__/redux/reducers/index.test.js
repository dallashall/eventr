const rootReducer = require('../../../redux/reducers/index');
const {
  blankTestStore,
} = require('./store');

describe('index.js', () => {
  test('init', () => {
    const condition = rootReducer(undefined, { type: '@@INIT' });
    expect(condition).toEqual(blankTestStore);
  });

});
