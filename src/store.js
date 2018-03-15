import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './ducks/users'
import eventReducer from './ducks/events'

const middleware = applyMiddleware(promiseMiddleware());

export default createStore( combineReducers({userReducer, eventReducer}), middleware )
