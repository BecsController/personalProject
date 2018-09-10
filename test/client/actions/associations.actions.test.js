dimport {
  getAssociations,
  newEmotion,
  addAssociation,
  receiveAssociations
} from '../../../client/actions/associations'
import nock from 'nock'

test('Receive associations action creator', () => {
  const fakeAssociations = [
    'Angry',
    'Sad',
    'Nervous',
    'Excited'
  ]

  const expected = {
    type: 'RECEIVE_ASSOCIATIONS',
    associations: fakeAssociations
  }

  const actual = receiveAssociations(fakeAssociations)

  expect(actual.associations.length).toBe(4)
  expect(actual).toEqual(expected)
})

test('getAssociations will dispatch an action on success', () => {
  const fakeAssociations = [
    'Happy',
    'Scared'
  ]
  const scope = nock('http://localhost:80')
    .get('/api/associations')
    .reply(200, fakeAssociations);

  const expectedAction = {
    type: 'RECEIVE_ASSOCIATIONS',
    associations: fakeAssociations
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })

  getAssociations()(dispatch)

})

test('getAssociations error', () => {
  const scope = nock('http://localhost:80')
    .get('/api/associations')
    .reply(404);

  const actual = getAssociations()()
  expect(actual).toBe(undefined)
})
