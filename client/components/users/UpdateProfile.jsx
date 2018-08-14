import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {updateUser} from '../../actions/users'

let baseUser = {
  name: this.state.user.name,
  email: this.state.user.email,
  avatar: this.state.user.avatar,
  password: this.state.user.password
}

class UpdateProfile extends React.Component {
      constructor (props) {
        super (props)

        this.state = {
          user: {...baseUser},
          userUpdated: false
        }
        this.submit = this.submit.bind(this)
        this.updateUser = this.updateUser.bind(this)
      }

      submit(e) {
        e.preventDefault()
        let user = this.state.user
        this.props.dispatch(updateUser(user))
        this.setState({
          user: {...baseUser},
          userUpdated: true
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
  let inputStyle = 'input is-medium'
  return (
    <div className="hero-body columns">
        <div className="column is-6 is-offset-3">
          <h1 className="is-size-1 has-text-grey-light has-text-weight-bold">Let's Update Your Details</h1>

          <div style={{width: '50vw', marginTop: '2.5vw'}}>
            <div style={{width: '20vw', float: 'left'}} className="box">
              <figure style={{marginTop: '1.5vw'}} className="image is-3by2">
                <img src={this.state.user.saved_avatar}/>
              </figure>
            </div>

            <form style={{width: '20vw', float: 'right', marginTop: '1.5vw'}} onSubmit={this.submit}>
              <div className="field control">
                <input className={inputStyle} placeholder="Name"
                  name="name" onChange={this.updateUser} value={this.state.name} />
              </div>

              <div className="field control">
                <input className={inputStyle} placeholder="Email"
                  name="email" onChange={this.updateUser} value={this.state.email} />
              </div>

              <div className="field control">
                <input className={inputStyle} placeholder="Image"
                  name="avatar" onChange={this.updateUser} value={this.state.avatar} />
              </div>

              <div className="field control">
                <input className={inputStyle} placeholder="Password"
                  name="password" onChange={this.updateUser} value={this.state.password} />
              </div>

              <input style={{marginTop: '.5vw'}} className="button is-info is-medium" type="submit" value="Submit"/>
            </form>
            {this.state.userUpdated && <Redirect to='/users'/>}
          </div>
        </div>
    </div>
  )
 }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UpdateProfile)
