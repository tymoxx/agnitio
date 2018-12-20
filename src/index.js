import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './init/store';
import App from './App';

import './index.css'

import "./assets/css/app.css";
import 'bootstrap/dist/css/bootstrap.css';
import "./assets/css/AdminLTE.css";
import "./assets/css/skin-blue.css";
import "./assets/css/font-awesome.css";
// import "./assets/css/ionicons.css";

const target = document.querySelector('#root');

const state = store.getState();

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App authenticated = { state.authActions.authenticated }/>
            </div>
        </ConnectedRouter>
    </Provider>,
    target
);
