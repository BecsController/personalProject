import request from 'superagent'

//Below are an example of both an action creator and an async request

//action:
export const receiveUsers = (users) => {
  return {
    type: 'RECEIVE_USERS',
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
export function getUsers () {
  return (dispatch) => {
    request
      .get(`/api/users`)
      .then(res => {
      dispatch(receiveUsers(res.body.users))
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
      console.log(res.body)
      dispatch(addUser(res.body))
    })
  }
}

export function addAvatar (id, user) {
  return (dispatch) => {
    request
      .put(`/api/users/${id}`)
      .send(user)
      .then(res => {
      dispatch(appendUserWithAvatar(res.body))
    })
  }
}
