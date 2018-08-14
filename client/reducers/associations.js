
function associations (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_ASSOCIATIONS':
      return action.associations
    case 'ADD_ASSOCIATION':
      return [...state, action.association]
    default:
      return state
  }
}

export default users
