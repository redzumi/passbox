const get = () => ({
  type: 'GET_PASSWORDS',
  payload: {},
})

const add = () => ({
  type: 'ADD_PASSWORD',
  payload: {},
})

const set = () => ({
  type: 'SET_PASSWORD',
  payload: {},
})

const reducer = (state = [{ id: 1, name: 'test1' }, { id: 2, name: 'test2' }], action) => {
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

export { reducer as default, add, get, set }
