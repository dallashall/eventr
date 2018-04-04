import action from '../utils/action';

export const SET_CURRENT_STEP = 'SET_CURRENT_STEP';
export const HYDRATE = 'HYDRATE';

export default controls => action(SET_CURRENT_STEP, controls);
