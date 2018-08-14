

function users (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_USERS':
      return action.users
    case 'ADD_USER':
      return [...state, action.user]
    case 'RECEIVE_USER':
      return action.user
    case 'APPEND_USER_WITH_AVATAR':
      return action.user
    case 'UPDATE_USER':
      return action.user
    default:
      return state
  }
}

export default users
