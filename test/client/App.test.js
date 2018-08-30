import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'
import './setup-dom'

test('Test that App renders', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('section')).toBeTruthy()
})
