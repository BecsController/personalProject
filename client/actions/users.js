import request from 'superagent'

//Below are an example of both an action creator and an async request

//action:
export const getUsers = (users) => {
  return {
    type: 'GET_USERS',
    users
  }
}

export const appendUserWithAvatar = (users) => {
  return {
    type: 'APPEND_USER_WITH_AVATAR',
    users
  }
}

export const addUser = (users) => {
  return {
    type: 'ADD_USER',
    user
  }
}

//Request:

export function grabUsers () {
  return (dispatch) => {
    request
      .get(`/api/users`)
      .then(res => {
         res.body
         dispatch(getUsers(res.body))
      })
      .catch(err => {
         err is an error
      })
  }
}

export function getUserById (id) {
  return (dispatch) => {
    request
      .get(`/api/users/${id}`)
      .end((err, res) => {
        if (err) {
        console.error(err.message)
        return
      }
      dispatch(getUser(res.body))
    })
  }
}

export function newUser (newUser) {
  return (dispatch) => {
    request
      .post(`/api/users`)
      .send(newUser)
      .then(res => {
      dispatch(addUser(res.body))
    })
  }
}

export function appendUserWithAvatar (id, user) {
  return (dispatch) => {
    request
      .put(`/api/users/${id}`)
      .send(user)
      .then(res => {
      dispatch(appendUserWithAvatar(res.body))
    })
  }
}
