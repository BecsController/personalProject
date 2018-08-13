const conn = require('./connection')
const hash = require('../auth/hash')

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

module.exports = {
  getStories,
  getStory,
  getPages,
  getPage
}
