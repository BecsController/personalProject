const conn = require('./connection')

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

function getPage(id, testDb) {
  const db = testDb || conn
  return db('pages').select().where({id}).first()
}

function saveStory (story, testDb) {
  const db = testDb || conn
  return db('savedStories').insert(story)
}

function getSaved (testDb) {
  const db = testDb || conn
  return db('savedStories').select()
}

module.exports = {
  getStories,
  getStory,
  getPages,
  getPage,
  saveStory,
  getSaved,
}
