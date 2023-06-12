import { legacy_createStore as createStore} from 'redux';
// import { createStore } from 'redux';

// import reducer from './modules/example/reducer'; -> nao preciso mais pois estou usando o combinereducers

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;

