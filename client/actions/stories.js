import request from 'superagent'

export const receiveStories = (stories) => {
  return {
    type: 'RECEIVE_STORIES',
    stories
  }
}

export const receivePages = (pages) => {
  return {
    type: 'RECEIVE_PAGES',
    pages
  }
}

export const receieveStory = (story) => {
  return {
    type: 'RECEIVE_STORY',
    story
  }
}

export function getStories () {
  return (dispatch) => {
    request
    .get(`/api/stories`)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receiveStories(res.body.stories))
    })
  }
}

export function getPages () {
  return (dispatch) => {
    request
    .get(`/api/pages`)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receivePages(res.body.pages))
    })
  }
}

export function getStoryById (id) {
  return (dispatch) => {
  request
  .get(`/api/stories/${id}`)
  .end((err, res) => {
    if (err) {
    console.error(err.message)
    return
    }
    dispatch(receieveStory(res.body.story))
    })
  }
}
