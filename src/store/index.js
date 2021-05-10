import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/rootReducer';
import createSagaMiddlware from 'redux-saga';
import rootSaga from './modules/rootSaga';


const sagaMiddleware = createSagaMiddlware();
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);


export default store;