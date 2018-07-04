import request from 'superagent'

export const getStories = (stories) => {
  return {
    type: 'GET_STORIES',
    stories
  }
}

export const getPages = (pages) => {
  return {
    type: 'GET_PAGES',
    pages
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
        dispatch(receiveStories(res.body))
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
        dispatch(receivePages(res.body))
      })
  }
}
