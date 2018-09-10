import request from '../utils/api'


export const addCurrentStory = (currentStory) => {
    return {
        type: 'ADD_STORY',
        currentStory
    }
}

export const receiveSavedStories = (stories) => {
  return {
    type: 'RECEIVE_SAVED_STORIES',
    stories
  }
}

export function getSavedStories() {
    return (dispatch) => {
        request('get', `stories/saved`)
        .then((res) => {
            dispatch(receieveSavedStories(res.body.stories))
        })
        .catch(err =>{
            console.log('Err', err)
        })
    }

}

export function saveStory (currentStory) {
  return (dispatch) => {
      request
      .post(`/stories/saved`)
      .send(currentStory)
      .then(res => {
        dispatch(addCurrentStory(res.body))
    })
    .catch(err =>{
        console.log('Err', err)
    })
  }
}
