import { combineReducers } from 'redux'

import passwords from './passwords'
import user from './user'

const reducers = combineReducers({
  user,
  passwords,
})

export default reducers
