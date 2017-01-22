import { persistStore, autoRehydrate } from 'redux-persist'
import {applyMiddleware, createStore} from 'redux';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import rootReducer from './Reducer';

const middleware = applyMiddleware(thunk);

const Store = autoRehydrate()(createStore)(rootReducer, middleware);
persistStore(Store, {storage: AsyncStorage});

export default Store;
