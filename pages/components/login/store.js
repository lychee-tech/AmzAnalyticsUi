import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { reducer } from 'redux-form'


export const initStore = (initialState = {}) => {
    return createStore(combineReducers({form: reducer}), initialState, applyMiddleware(thunkMiddleware))
};