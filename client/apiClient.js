import request from 'superagent'

const rootUrl = '/api'

export function getPages () {
  return request.get(rootUrl + '/pages')
  .then(res => {
      return res.body.pages
    })
}

export function getUsers () {
  return request.get(rootUrl + '/users')
  .then(res => {
    return res.body.users
  })
}

export function newUser (newUser) {
  return request.post(rootUrl + '/users')
  console.log(newUser)
  .send(newUser)

}

export function getStories () {
  return request.get(rootUrl + '/stories')
  .then(res => {
    return res.body.stories
  })
}
