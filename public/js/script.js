import React from "react";
import ReactDOM from "react-dom";
import routes from '../config/routes';
import Layout from "../components/layout";
import {Provider} from 'react-redux';
import store from '../states/state';
import Todo from '../components/Todo';
import { Router, Route, IndexRoute, hashHistory, Link } from "react-router";
const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    app);