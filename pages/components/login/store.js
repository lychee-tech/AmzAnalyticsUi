import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { reducer as formReducer } from 'redux-form'
const reducers = {
    form: formReducer
};

export const initStore = (initialState = {}) => {
    return createStore(combineReducers(reducers), initialState, applyMiddleware(thunkMiddleware))
};