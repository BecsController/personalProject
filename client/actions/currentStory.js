import request from '../utils/api'


export const addCurrentStory = (currentStory) {
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

export function saveStory(story){
  return (dispatch) => {
    request('post', 'stories/saved', story)
      .then(res => {
        dispatch(addCurrentStory(res.body.story))
      })
      .catch(err =>{
          console.log('Err', err)
      })
  }
}
