import { createStore } from 'redux';
import rootReducer from './reducers';

const loadStore = (preloadedState = {}) => createStore(rootReducer, preloadedState);

export default loadStore;
