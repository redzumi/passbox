// Dont to forget about reject function
const makeLogOn = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ test: true })
      reject(new Error('Silenced Exception!'))
    }, 1000)
  })

const logOn = () => dispatch => {
  dispatch({
    type: 'USER_LOGON',
    payload: {},
  })

  makeLogOn()
    .then(data => {
      dispatch({
        type: 'USER_LOGON_SUCCESS',
        payload: { data },
      })
    })
    .catch(error => {
      dispatch({
        type: 'USER_LOGON_FAIL',
        payload: { error },
      })
    })
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGON':
      return {
        ...state,
        isFetching: true,
      }
    case 'USER_LOGON_SUCCESS':
      return {
        ...state,
        isFetching: false,
        ...action.payload,
      }
    case 'USER_LOGON_FAIL':
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

export { reducer as default, logOn }
