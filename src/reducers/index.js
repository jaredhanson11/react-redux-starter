import { combineReducers } from 'redux';
import navigationStateReducer from './navigationStateReducer.js';

export const rootReducer = combineReducers({
    navigationState: navigationStateReducer
});
