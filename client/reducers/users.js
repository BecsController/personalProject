

function users (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_USERS':
      return action.users
    case 'ADD_USER':
      return [...state, action.users]
    default:
      return state
  }
}

export default users
