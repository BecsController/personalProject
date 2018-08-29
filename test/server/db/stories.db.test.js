const request = require('supertest')

const env = require('../test-environment')
const Db = require('../../../server/db/stories')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

test('can get stories from db', () => {
    return Db.getStories(testDb)
      .then(stories => {
        expect(stories.length).toBe(3)
        expect(stories[0].hasOwnProperty('title')).toBeTruthy()
  })
})

test('getStory returns a single story', () => {
  let id = 2
  return Db.getStory(id, testDb)
    .then(story => {
      expect(story.hasOwnProperty('title')).toBeTruthy()
      expect(story.hasOwnProperty('description')).toBeTruthy()
      expect(story.description).toBe('Crowds and noise can be difficult to cope with, this story looks at potential scenarios that might develop when out and about at the mall.')
  })
})

test('getPages returns an array of pages', () => {
  return Db.getPages(testDb)
    .then(pages => {
      expect(pages.length).toBe(4)
      expect(pages[0].hasOwnProperty('population')).toBeTruthy()
  })
})

test('getPage returns a single page', () => {
  let id = 2
  return Db.getPage(id, testDb)
    .then(page => {
      expect(page.id).toBe(2)
      expect(page.hasOwnProperty('background')).toBeTruthy()
  })
})
