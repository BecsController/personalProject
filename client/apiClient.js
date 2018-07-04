import request from 'superagent'

const rootUrl = '/api'

export function getPages () {
  return request.get(rootUrl + '/pages')
  .then(res => {
      return res.body.pages
    })
}

// export function getUsers () {
//   return request.get(rootUrl + '/users')
//   .then(res => {
//     return res.body.users
//   })
// }

export function getUser (id) {
  return request.get(rootUrl + '/users/' + id)
  .then(res => {
    return res.body
  })
}

export function appendUserWithAvatar (id, user) {
  return request.put(rootUrl + '/users/' + id)
  .send(user)
  .then(res => {
    return res.body
  })
}

// export function newUser (newUser) {
//   return request.post(rootUrl + '/users')
//   .send(newUser)
//   .then(res => {
//     return res.body
//   })
// }

// export function getStories () {
//   return request.get(rootUrl + '/stories')
//   .then(res => {
//     return res.body.stories
//   })
// }

export function getStoryById (id) {
  return request.get(rootUrl + '/stories/' + id)
  .then(res => {
    return res.body
  })
}
