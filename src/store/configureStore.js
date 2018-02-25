import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'

import reducers from './reducers'

const configureStore = history =>
  createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    applyMiddleware(thunk, routerMiddleware(history), logger)
  )

export default configureStore
