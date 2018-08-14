import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Homepage from './Home'
import Header from './Header'
import Signup from './users/Signup'
import Users from './users/Users'
import StoriesHome from './story/StoriesHome'
import StoryStart from './story/StoryStart'
import StoryPage from './story/StoryPage'
import UserPage from './users/UserPage'
import Avatar from './users/Avatar'
import Login from './users/Login'
import UpdateProfile from './users/UpdateProfile'

const App = () => {
  return (
    <Router>
      <div>
        <section className="section hero is-fullheight has-text-centered is-link is-bold">
        <Route path='/' component={Header}/>
        <Route exact path="/" component={Homepage}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/users' component={Users}/>
        <Route path='/stories' component={StoriesHome}/>
        <Route path='/login' component={Login} />
        <Route exact path='/story/:id' component={StoryStart}/>
        <Route path='/story/:id/1' component={StoryPage}/>
        <Route exact path='/user/:id' component={UserPage} />
        <Route path='/user/:id/avatar' component={Avatar}/>
        <Route path='/user/:id/update' component={UpdateProfile}/>
        </section>
    </div>
    </Router>
  )
}


export default App
