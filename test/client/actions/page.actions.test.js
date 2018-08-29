import {getPages, receivePages} from '../../client/actions/stories'
import nock from 'nock'

test('Receive pages action creator', () => {
  const fakePages = [
    'Page One',
    'Page Two',
    'Page Three',
    'Page Four'
  ]

  const expected = {
    type: 'RECEIVE_PAGES',
    pages: fakePages
  }

  const actual = receivePages(fakePages)

  expect(actual.pages.length).toBe(4)
  expect(actual).toEqual(expected)
})

test('getPages will dispatch an action on success', () => {
  const fakePages = [
    'Page One',
    'Page Two'
  ]
  const scope = nock('http://localhost:80')
    .get('/api/pages')
    .reply(200, fakePages);

  const expectedAction = {
    type: 'RECEIVE_PAGES',
    pages: fakePages
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })

  getPages()(dispatch)

})

test('getPages error', () => {
  const scope = nock('http://localhost:80')
    .get('/api/pages')
    .reply(404);

  const actual = getPages()()
  expect(actual).toBe(undefined)
})
