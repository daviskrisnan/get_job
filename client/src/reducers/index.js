import { combineReducers } from 'redux';

import userReducers from './user';
import jobReducers from './job';

export default combineReducers({
    userReducers, jobReducers
})