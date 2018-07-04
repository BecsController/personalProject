import {combineReducers} from 'redux'

import pages from './pages'
import stories from './stories'
import users from './users'

export default combineReducers({
  pages,
  stories,
  users
})
