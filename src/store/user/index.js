import { addUser, getUser } from '../../helpers/indexedDB'

const authenticating = () => ({
  type: 'USER_ACTION',
  payload: {
    isFetching: true,
    isFailed: false,
  },
})

const authenticated = data => ({
  type: 'USER_ACTION_SUCCESS',
  payload: {
    isFetching: false,
    isAuthenticated: true,
    data,
  },
})

const authenticateError = error => ({
  type: 'USER_ACTION_FAIL',
  payload: {
    isFetching: false,
    isFailed: true,
    error: error.message,
  },
})

const creating = () => ({
  type: 'USER_ACTION',
  payload: {
    isFetching: true,
    isFailed: false,
  },
})

const created = data => ({
  type: 'USER_ACTION_SUCCESS',
  payload: {
    isFetching: false,
    isCreated: true,
    data,
  },
})

const createError = error => ({
  type: 'USER_ACTION_FAIL',
  payload: {
    isFetching: false,
    isFailed: true,
    error: error.message,
  },
})

const authenticate = user => dispatch => {
  dispatch(authenticating())

  getUser(user)
    .then(data => {
      dispatch(authenticated(data))
    })
    .catch(error => dispatch(authenticateError(error)))
}

const create = user => dispatch => {
  dispatch(creating())

  addUser(user)
    .then(data => dispatch(created(data)))
    .catch(error => dispatch(createError(error)))
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_ACTION':
      return {
        ...state,
        ...action.payload,
      }
    case 'USER_ACTION_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }
    case 'USER_ACTION_FAIL':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export { reducer as default, authenticate, create }
