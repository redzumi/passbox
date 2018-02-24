import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, logger))

export default configureStore
