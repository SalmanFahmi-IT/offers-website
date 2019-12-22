import { combineReducers } from 'redux';
import user from './user';
import offers from './offers';

export default combineReducers({
    user,
    offers
});