import { applyMiddleware, createStore, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import { rootReducer } from './reducers';
import initialState from './config/initialState.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(apiMiddleware);

var configureStore = function(reducer, initialState){
    return createStore(
        reducer,
        initialState,
        composeEnhancers(middleware)
    );
};

export default configureStore(rootReducer, initialState);
