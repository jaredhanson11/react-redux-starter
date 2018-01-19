import Immutable from 'immutable';

export default function(state={}, action) {
    switch (action.type) {
        default:
            var newState = Immutable.fromJS(state);
            newState = newState.toJS();
            return newState;
    }
}
