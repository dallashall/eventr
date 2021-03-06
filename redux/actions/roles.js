const action = require('../utils/action');

const RECEIVE_ROLE = 'RECEIVE_ROLE';
const REMOVE_ROLE = 'REMOVE_ROLE';
const REORDER_ROLES = 'REORDER_ROLES';

const roleAction = function roleAction() {
  return action();
};

module.exports = {
  RECEIVE_ROLE,
  REMOVE_ROLE,
  REORDER_ROLES,
  roleAction,
};
