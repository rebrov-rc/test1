import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../Redux-Saga';
import rootReducers from './Reducers/rootRedicer'

const sagaMiddleWare = createSagaMiddleware();
const STORE  = createStore(rootReducers, applyMiddleware( sagaMiddleWare));
sagaMiddleWare.run(rootWatcher);

export default STORE;