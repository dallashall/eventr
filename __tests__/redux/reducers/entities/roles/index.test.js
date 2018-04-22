const rolesReducer = require('../../../../../redux/reducers/entities/roles/index');

describe.skip('index.js', () => {
  test('rolesReducer', () => {
    const condition = rolesReducer();
    expect(condition);
  });

});
