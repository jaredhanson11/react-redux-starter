import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import App from './App.jsx';
import store from './store.js';

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Route path='/' component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('main')
);
