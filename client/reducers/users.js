const initialState = []

function users (state = initialState, action) {
  switch (action.type) {
    case 'GET_USERS':
      return [....action.users]
    case 'ADD_USER':
      return [....state, action.users]
    default:
      return state
  }
}

export default users
