//this store is not related with online shop, this is the store of redux cycle.
import { createStore, applyMiddleware} from 'redux';
import { persistStore} from 'redux-persist';// used to store our items to localstorage , so items will not remove when we refresh our page
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default (store , persistor);