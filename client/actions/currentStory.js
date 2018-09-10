import request from '../utils/api'


export function updateCurrentStory (currentStory) {
    return {
        type: 'UPDATE_STORY',
        currentStory
    }
}


export function getStoryState() {
    return (dispatch) => {
        request('get', `story/current`)
        .then((res) => {
            dispatch(updateCurrentStory(res.body.currentStory))
        })
        .catch(err =>{
            console.log('Err', err)
        })
    }

}
