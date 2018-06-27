const db = require('./connection')
//
// function getUsers() {
//   return db('users').select()
// }
//
// function createUser(newUser) {
//   return db('users')
//   .insert(newUser)
// }
//
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
// function getStories () {
//   return db('stories').select()
// }
//
// function getStory (id) {
//   return db('stories')
//   .where('id', id).first()
// }
//
// function addPageToUserStory (currentPage) {
//   return db('userstories')
//   .insert(currentPage)
// }
//
// function addEmotionToPage (currentEmotion) {
//   return db('pages')
//   .where('emotion')
//   .update(currentEmotion)
// }

function getPages () {
  return db('pages').select()
}

module.exports = {
  // createUser,
  // getUsers,
  // getUser,
  // updateUser,
  // getStories,
  // getStory
  // currentPage,
  // addEmotionToPage,
  getPages
}
