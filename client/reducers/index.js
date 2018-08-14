import {combineReducers} from 'redux'

import auth from './auth'
import pages from './pages'
import stories from './stories'
import users from './users'
import associations from './associations'

export default combineReducers({
  pages,
  stories,
  users,
  auth,
  associations
})
