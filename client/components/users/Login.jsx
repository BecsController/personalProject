import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

let baseUser = {
  email: '',
  password: ''
}

class Login extends React.Component {
      constructor (props) {
        super (props)

        this.state = {
          user: {...baseUser},
        }
        this.submit = this.submit.bind(this)
        this.updateUser = this.updateUser.bind(this)
      }

      submit(e) {
        e.preventDefault()
        let user = this.state.user
        this.props.dispatch( (user))
        this.setState({
          user: {...baseUser},
        })
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
    <div style={{marginBottom: '12vw'}} className="section column is-8 is-offset-2">
          <h1 style={{marginBottom: '2vw'}} className="is-size-1 is-fullwidth has-text-grey-light has-text-weight-bold">Login</h1>

            <form style={{marginBottom: '7vw'}} onSubmit={this.submit}>

              <div className="field control">
                <input className="input is-medium is-fullwidth" placeholder="Enter your email"
                  name="email" onChange={this.updateUser} value={this.state.email} />
              </div>

              <div className="field control">
                <input className="input is-medium is-fullwidth" placeholder="Enter your password"
                  name="password" onChange={this.updateUser} value={this.state.password} />
              </div>

                <input style={{marginTop: '.5vw'}} className="button is-info is-medium is-fullwidth" type="submit" value="Login"/>
            </form>
    </div>
  )
 }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Login)
