import {createStore,combineReducers} from 'redux';
import countReducer from './Reducer';

const rootReducer = combineReducers({
    countReducer,
})

export const store = createStore(rootReducer);