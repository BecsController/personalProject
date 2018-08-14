import request from 'superagent'

export const receiveUsers = (users) => {
  return {
    type: 'RECEIVE_USERS',
    users
  }
}

export const receiveUser = (user) => {
  return {
    type: 'RECEIVE_USER',
    user
  }
}

export const appendUserWithAvatar = (user) => {
  return {
    type: 'APPEND_USER_WITH_AVATAR',
    user
  }
}

export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user
  }
}

export const updateUser = (user) => {
  return {
    type: 'UPDATE_USER',
    user
  }
}

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
    .then(res => {
      dispatch(receiveUser(res.body))
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

export function updateUserInfo (id, user) {
  return (dispatch) => {
    request
    .put(`/api/users/${id}`)
    .send(user)
    .then(res => {
      dispatch(updateUser(res.body))
    })
  }
}
