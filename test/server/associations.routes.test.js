const request = require('supertest')

jest.mock('../../server/db/associations', () => ({
  getAssociations: () => Promise.resolve([
    {id: 1, page_id: 1, emotion: 'anxious', user_id: 5},
    {id: 2, page_id: 2, emotion: 'excited', user_id: 5},
    {id: 3, page_id: 3, emotion: 'scared', user_id: 5}
  ]),
  createAssociations: () => Promise.resolve([
    {page_id: 4, emotion: 'angry', user_id: 7}
  ])
}))

const server = require('../../server/server')

test('Get all associations', () => {
  return request(server)
    .get('/api/associations')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(3)
      expect(res.body[0].emotion).toBe('anxious')
      expect(res.body[1].user_id).toBe(5)
      expect(res.body[1].id).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('Can insert a new association to db', () => {
  return request(server)
    .post('/api/associations')
    .send({page_id: 4, emotion: 'angry', user_id: 7})
    .expect(202)
    .then(res => {
      expect(res.body.length).toBe(1)
      expect(res.body[0].emotion).toBe('angry')
      expect(res.body[0].user_id).toBe(7)
      expect(res.body[0].page_id).toBe(4)
  })
  .catch(err => {
    expect(err).toBeFalsy()
  })
})
