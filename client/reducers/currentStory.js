export const initialState = {
    user_id: 0,
    story_id: 0,
    questions: [],
    emotions: [],
    answers: []
}



export default function currentStory(state = initialState, action) {
    switch(action.type) {
        case 'ADD_STORY':
            return [...state, action.currentStory]
        case 'RECEIVE_SAVED_STORIES':
            return action.stories
        default:
            return state;
    }
}
