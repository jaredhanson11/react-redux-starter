import Immutable from 'immutable';

import navigationActionTypes from '../actions/actionTypes/navigation.js';

export default function(state={}, action) {
    switch (action.type) {
        case navigationActionTypes.SELECT_NAVIGATION_ITEM:
            var newState = Immutable.fromJS(state);
            newState = newState.toJS();
            newState.activeNavigationItem = selected;
            return newState;
        default:
            var newState = Immutable.fromJS(state);
            newState = newState.toJS();
            return newState;
    }
}
