import {createStore, combineReducers, applyMiddleware} from 'redux';
import promisesMiddleware from '../components/middlewares/promises';
import issues from '../components/reducers';

const reducer = combineReducers(issues);
const createStoreWithMiddleware = applyMiddleware(
    promisesMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer, { /* the initial state */
    issues: []
});

export default store;