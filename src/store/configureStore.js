import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux'

import reducers from './reducers'

const configureStore = () => createStore(combineReducers(reducers), applyMiddleware(thunk, logger))

export default configureStore
