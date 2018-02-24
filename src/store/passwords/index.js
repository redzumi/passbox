const getPasswords = () => ({
  type: 'GET_PASSWORDS',
  payload: {},
})

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PASSWORDS':
      return [
        ...state,
        {
          id: action.id,
        },
      ]
    default:
      return state
  }
}

export { reducer as default, getPasswords }
