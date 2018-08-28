const request = require('supertest')

jest.mock('../../server/db/stories', () => ({
  getStories: () => Promise.resolve([
    {id: 1, title: 'School'},
    {id: 2, title: 'The Mall'},
    {id: 3, title: 'Wash hands'}
  ]),
  getStory: () => Promise.resolve([
    {id: 2, title: 'Wash hands', user_id: 2, genre: 'hygiene'}
  ]),
  getPages: () => Promise.resolve([
    {id: 1, background: 'chair', population: 'parents'},
    {id: 2, background: 'classroom', population: 'teacher'}
  ])
}))

const server = require('../../server/server')

test('Get all stories', () => {
  return request(server)
    .get('/api/stories')
    .expect(200)
    .then(res => {
      expect(res.body.stories.length).toBe(3)
      expect(res.body.stories[2].title).toBe('Wash hands')
      expect(res.body.stories[1]).toHaveProperty('title')
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('Get single story', () => {
  const id = 2
  return request(server)
    .get('/api/stories/:id')
    .expect(200)
    .then(res => {
      expect(res.body[0].title).toBe('Wash hands')
      expect(res.body.length).toBe(1)
      expect(res.body[0].id).toBe(2)
      expect(res.body[0].genre).toBe('hygiene')
      expect(res.body[0].user_id).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('Get pages returns all pages', () => {
  return request(server)
    .get('/api/pages')
    .expect(200)
    .then(res => {
      expect(res.body.pages.length).toBe(2)
      expect(res.body.pages[0].background).toBe('chair')
      expect(res.body.pages[1].population).toBe('teacher')
      expect(res.body.pages[1].id).toBe(2)
  })
  .catch(err => {
    expect(err).toBeFalsy()
  })
})
