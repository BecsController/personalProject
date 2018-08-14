import request from 'superagent'

export const receiveAssociations = (associations) => {
  return {
    type: 'RECEIVE_ASSOCIATIONS',
    associations
  }
}

export const addAssociation = (association) => {
  return {
    type: 'ADD_ASSOCIATION',
    association
  }
}

export function getAssociations () {
  return (dispatch) => {
    request
    .get(`/api/associations`)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receiveAssociations(res.body.associations))
    })
  }
}

export function newEmotion (newEmotion) {
  return (dispatch) => {
    request
    .post(`/api/associations`)
    .send(newEmotion)
    .then(res => {
      dispatch(addAssociation(res.body))
    })
  }
}
