import {receiveStories, getStories} from '../../client/actions/stories'
import nock from 'nock'

test('Receive stories action creator', () => {
  const fakeStories = [
    'About school',
    'About the mall'
  ]

  const expected = {
    type: 'RECEIVE_STORIES',
    stories: fakeStories
  }

  const actual = receiveStories(fakeStories)

  expect(actual.stories.length).toBe(2)
  expect(actual).toEqual(expected)
})

test('getStories will dispatch an action on success', () => {
  const fakeStories = [
    'About school',
    'About the mall',
    'Washing hands'
  ]
  const scope = nock('http://localhost:80')
    .get('/api/stories')
    .reply(200, fakeStories);

  const expectedAction = {
    type: 'RECEIVE_STORIES',
    stories: fakeStories
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })

  getStories()(dispatch)

})

test('getStories error', () => {
  const scope = nock('http://localhost:80')
    .get('/api/stories')
    .reply(404);

  const actual = getStories()()
  expect(actual).toBe(undefined)
})
