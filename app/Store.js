import { persistStore, autoRehydrate } from 'redux-persist'
import {applyMiddleware, createStore} from 'redux';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './Reducer';

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

const Store = autoRehydrate()(createStore)(rootReducer, middleware);
persistStore(Store, {storage: AsyncStorage});

export default Store;
