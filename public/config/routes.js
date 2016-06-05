import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link } from "react-router";

import Pictures from '../components/pictures';
import Main from '../components/main';
import Layout from '../components/layout';
import PictureDetails from '../containers/pictureDetails';

import {Provider} from 'react-redux';
import store from '../states/state';

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main} >
            <IndexRoute component={Layout} />
         </Route>
        <Route path='/pictures' component={Pictures} />
        <Route path='/pictures/:id' header='header prop route' component={PictureDetails} />
    </Router>
);

module.exports = routes;