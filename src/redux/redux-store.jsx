import {createStore, combineReducers } from 'redux';

import profilePageReducer from './profileReducer';
import dialogsPageReducer from './dialogsReducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
})

let store = createStore(reducers);

export default store;