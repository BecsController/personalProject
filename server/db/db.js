const conn = require('./connection')
const hash = require('../auth/hash')

function getUsers(testDb) {
  const db = testDb || conn
  return db('users').select()
}

function getAuthUsers(testDb) {
  const db = testDb || conn
  return db('userAuth').select()
}

function createUser(newUser, testDb) {
  const db = testDb || conn
  let authInfo = {
  password: newUser.password,
  name: newUser.name,
}
  let addUser = {
  name: newUser.name,
  email: newUser.email,
  avatar: newUser.avatar,
  saved_stories: newUser.saved_stories,
}
  // const passwordHash = hash.generate(newUser.password)
  console.log(authInfo, newUser, addUser)
  return db('users')
  .insert(addUser)
  .then(() => {
  return db('userAuth')
  .insert(authInfo)
})
}

function userExists (username, testDb) {
  const db = testDb || conn
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, testDb) {
  const db = testDb || conn
  return db('users').select()
    .where('username', username).first()
}

function getStories (testDb) {
  const db = testDb || conn
  return db('stories').select()
}

function getStory (id, testDb) {
  const db = testDb || conn
  return db('stories').select().where({id}).first()
}

function getPages (testDb) {
  const db = testDb || conn
  return db('pages').select()
}

function getUser(id, testDb) {
  const db = testDb || conn
  return db('users').select().where({id}).first()
}

function updateUser(id, updatedInfo, testDb) {
  const db = testDb || conn
  return db('users')
  .where('id', id)
  .update(updatedInfo)
}


module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  getStories,
  getStory,
  getPages,
  userExists,
  getUserByName
}
