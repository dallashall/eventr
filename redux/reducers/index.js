import { combineReducers } from 'redux';
import entities from './entities';
import controls from './controls';

export default combineReducers({
  entities,
  controls,
});
