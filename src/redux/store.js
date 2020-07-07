//this store is not related with online shop, this is the store of redux cycle.
import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;