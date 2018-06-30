import React from 'react'
import {newUser} from '../apiClient.js'

let baseUser = {
  name: '',
  email: '',
  avatar: ''
}

class Signup extends React.Component {
      constructor (props) {
        super (props)

        this.state = {
          user: {...baseUser}
        }
        this.submit = this.submit.bind(this)
        this.updateUser = this.updateUser.bind(this)
      }

      submit(e) {
        e.preventDefault()
        let user = this.state.user
        newUser(user)
        console.log(user);
        this.setState({
          user: {...baseUser}
        })
        res.redirect('/users')
      }

      updateUser(e) {
        let user = this.state.user
        user[e.target.name] = e.target.value
        this.setState ({
          user
        })
      }

  render() {

  return (
    <div className="hero-body columns">
        <div className="column is-6 is-offset-3">
          <h1 className="is-size-1 has-text-grey-light has-text-weight-bold">Welcome to StoryTime</h1>

          <div style={{width: '50vw', marginTop: '2.5vw'}}>
            <div style={{width: '20vw', float: 'left'}} className="box">
              <figure style={{marginTop: '1.5vw'}} className="image is-3by2">
                <img src="/images/smallbook.jpg"/>
              </figure>
            </div>

            <h2 style={{width: '20vw', float: 'right'}} className="is-size-3 is-spaced has-text-grey-light">Let's get started!</h2>

            <form style={{width: '20vw', float: 'right', marginTop: '1.5vw'}} onSubmit={this.submit}>
              <div className="field control">
                <input className="input is-medium" placeholder="Enter your name"
                  name="name" onChange={this.updateUser} value={this.state.name} />
              </div>

              <div className="field control">
                <input className="input is-medium" placeholder="Enter your email"
                  name="email" onChange={this.updateUser} value={this.state.email} />
              </div>

              <div className="field control">
                <input className="input is-medium" placeholder="Insert Image URL"
                  name="avatar" onChange={this.updateUser} value={this.state.avatar} />
              </div>

                  <input style={{marginTop: '.5vw'}} className="button is-info is-medium" type="submit" value="Create Profile"/>
            </form>
          </div>
        </div>
    </div>
  )
 }
}

export default Signup
