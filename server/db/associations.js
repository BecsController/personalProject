const conn = require('./connection')
const hash = require('../auth/hash')

function getAssociations (testDb) {
  const db = testDb || conn
  return db('associations').select()
}

function createAssociations (newEmotion, testDb) {
  const db = testDb || conn
  return db('associations').insert(newEmotion)
}


module.exports = {
  getAssociations,
  createAssociations
}
