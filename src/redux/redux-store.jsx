import {createStore, combineReducers } from 'redux';

import profilePageReducer from './profileReducer';
import dialogsPageReducer from './dialogsReducer';
import usersPageReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer
})

let store = createStore(reducers);

window.store = store;

export default store;