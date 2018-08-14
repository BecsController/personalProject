const initialState = []

function stories (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_STORIES':
      return [...action.stories]
    case 'RECEIVE_STORY':
      return action.story
    default:
      return state
  }
}

export default stories
