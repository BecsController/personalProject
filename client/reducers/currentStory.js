export const initialState = {
    user_id: 0,
    story_id: 0,
    questions: [],
    emotions: [],
    answers: []
}



export default function currentStory(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_STORY':
            return action.currentStory
        default:
            return state;
    }
}
