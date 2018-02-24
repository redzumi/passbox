import { getUser } from '../../helpers/indexedDB'

const authenticating = () => ({
  type: 'USER_AUTH',
  payload: {},
})

const authenticated = data => ({
  type: 'USER_AUTH_SUCCESS',
  payload: { data },
})

const authenticatedError = error => ({
  type: 'USER_AUTH_FAIL',
  payload: { error: error.message },
})

const authenticate = user => dispatch => {
  dispatch(authenticating())

  getUser(user)
    .then(data => dispatch(authenticated(data)))
    .catch(error => dispatch(authenticatedError(error)))
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_AUTH':
      return {
        ...state,
        isFetching: true,
      }
    case 'USER_AUTH_SUCCESS':
      return {
        ...state,
        isFetching: false,
        ...action.payload,
      }
    case 'USER_AUTH_FAIL':
      return {
        ...state,
        isFetching: false,
        isFailed: true,
        ...action.payload,
      }
    default:
      return state
  }
}

export { reducer as default, authenticate }
