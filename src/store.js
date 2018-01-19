import { applyMiddleware, createStore, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import { rootReducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(apiMiddleware);

const configureStore = function(reducer, initialState){
    return createStore(
        reducer,
        initialState,
        composeEnhancers(middleware)
    );
};

const initialState = {};

export default configureStore(rootReducer, initialState);
