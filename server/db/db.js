const db = require('./connection')

function getUsers() {
  return db('users').select()
}

function createUser(newUser) {
  return db('users')
  .insert(newUser)
}

function getStories () {
  return db('stories').select()
}

function getStory (id) {
  return db('stories').select().where({id}).first()
}

function getPages () {
  return db('pages').select()
}

// function getUser(id) {
//   return db('users')
//   .where('id', id).first()
// }
//
// function updateUser(id, updatedInfo) {
//   return db('users')
//   .where('id', id)
//   .update(updatedInfo)
// }
//

module.exports = {
  createUser,
  getUsers,
  // getUser,
  // updateUser,
  getStories,
  getStory,
  getPages
}
