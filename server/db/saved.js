const conn = require('./connection')

function saveStory (currentStory, testDb) {
  const db = testDb || conn
  const tempStory = {...currentStory}
  tempStory.answers = JSON.stringify(tempStory.answers, null, 2)
  return db('savedStories')
  .insert(tempStory)
}

function getSaved (testDb) {
  const db = testDb || conn
  return db('savedStories').select()
}

module.exports = {
  saveStory,
  getSaved,
}
