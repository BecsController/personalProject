import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getUserById, updateUserInfo} from '../../actions/users'

class UpdateProfile extends React.Component {
      constructor (props) {
        super (props)

        this.state = {
          user: {
            name: this.props.users.name,
            email: this.props.users.email,
            avatar: this.props.users.avatar,
            saved_avatar: this.props.users.saved_avatar,
            saved_stories: this.props.users.saved_stories
          },
          userUpdated: false,
        }
        this.submit = this.submit.bind(this)
        this.updateUser = this.updateUser.bind(this)
      }

      submit(e) {
        e.preventDefault()
        let user = this.state.user
        let id = this.props.auth.user.id
        console.log(user, id)
        this.props.dispatch(updateUserInfo(id, user))
        this.setState({
          user: {
            name: this.props.users.name,
            email: this.props.users.email,
            avatar: this.props.users.avatar,
            saved_avatar: this.props.users.saved_avatar,
            saved_stories: this.props.users.saved_stories
          },
          userUpdated: true
        })
        this.props.dispatch(getUserById(this.props.match.params.id))
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
          <h1 className="is-size-1 has-text-grey-light has-text-weight-bold">Let's Update Your Details {this.props.users.name}</h1>

          <div style={{width: '50vw', marginTop: '2.5vw'}}>
            <div style={{width: '20vw', height: '20vw', float: 'left'}} className="box">
              <figure className="image is-1by1">
                <img src={this.props.users.saved_avatar ? this.props.users.saved_avatar : this.props.users.avatar}/>
              </figure>
            </div>

            <form style={{width: '20vw', float: 'right', marginTop: '1.5vw'}} onSubmit={this.submit}>
              <div className="field control">
                <input className={inputStyle} placeholder={this.props.users.name}
                  name="name" onChange={this.updateUser} value={this.state.name} />
              </div>

              <div className="field control">
                <input className={inputStyle} placeholder={this.props.users.email}
                  name="email" onChange={this.updateUser} value={this.state.email} />
              </div>

              <div className="field control">
                <input className={inputStyle} placeholder={this.props.users.avatar}
                  name="avatar" onChange={this.updateUser} value={this.state.avatar} />
              </div>

              <input style={{marginTop: '.5vw'}} className="button is-info is-medium" type="submit" value="Submit"/>
            </form>

            <Link style={{marginTop: '2vw', marginLeft: '9vw'}} className="button is-medium is-rounded" to='/users'>
              Back To Users Page
            </Link>

          </div>
        </div>
    </div>
  )
 }
}

const mapStateToProps = state => state


export default connect(mapStateToProps)(UpdateProfile)
