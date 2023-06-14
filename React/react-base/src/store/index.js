import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore} from 'redux';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistedReducers from './modules/reduxPersist';
// import { createStore } from 'redux';

// import reducer from './modules/example/reducer'; -> nao preciso mais pois estou usando o combinereducers

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducers(rootReducer), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;

