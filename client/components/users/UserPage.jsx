import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {UpdateProfile} from './UpdateProfile'

import {getUserById, getUsers} from '../../actions/users'

class User extends React.Component {

  constructor(props) {
    super (props)

    this.state = {
      user: [],
      stateReset: false,
      updateProfile: false,
    }
  this.returnState = this.returnState.bind(this)
  this.showModal = this.showModal.bind(this)
  }

componentDidMount () {
  this.props.dispatch(getUserById(this.props.match.params.id))
}

componentWillReceiveProps (nextProps) {
  this.setState({
    user: nextProps.user
  })
}

returnState() {
  this.props.dispatch(getUsers())
  this.setState({
    user: this.state.users,
    stateReset: true
  })
}

showModal() {
  this.setState({
    updateProfile: true,
  })
}

hideModal() {
  this.setState({
    updateProfile: false
  })
}

  render() {
    let buttonClass = "is-rounded button is-medium"
    console.log(this.state);
    return (
      <div className="column has-text-centered is-10 is-offset-1">
        <h3 className="box is-size-1 has-text-grey-dark">{this.state.user.username}
          <a style={{float: 'right', marginTop: '1.25vw'}} className={`${buttonClass} is-link`} onClick={this.showModal}>
              Update Profile
          </a>
        {this.state.updateProfile && <UpdateProfile hideModal={this.hideModal.bind(this)} user={this.state.user} />}
        </h3>
        <div className="box is-multiline is-flex" id="grid">

          <div style={{width: '20vw', height: '25vw'}} className="box card-image">
            <figure className="image is-1by1">
              <img src={this.state.user.avatar} alt={this.state.user.username}/>
            </figure>
          </div>

          <div style={{width: '40vw'}} className="box">
            <h4 className="has-text-grey-dark">Email: {this.state.user.email}</h4>
            <h4 className="has-text-grey-dark">Stories: {this.state.user.saved_stories}</h4>
            {!this.state.user.saved_avatar &&
              <Link to={`/user/${this.state.user.id}/avatar`}>
                <button style={{marginTop: '3vw'}} className={buttonClass}>Create Avatar</button>
              </Link>}
            </div>

            {this.state.user.saved_avatar &&
              <div style={{width: '20vw', height: '25vw'}} className="box card-image">
                <figure className="image is-1by-1">
                  <img src={this.state.user.saved_avatar} alt={this.state.user.username} />
                </figure>
                <Link style={{marginTop: '3vw'}} className={buttonClass} to={`/user/${this.state.user.id}/avatar`}>
                  Edit Avatar
                </Link>
              </div>}


              {this.state.user.saved_stories && <div className="box card-image">
                <ul>
                  {this.state.user.saved_stories.map(story =><li>story</li>)})}
                </ul>
              </div>}

            </div>
            <button className="button is-medium is-rounded is-link" onClick ={this.returnState}>Back To Users Page</button>
            {this.state.stateReset === true && <Redirect to='/users'/>}
          </div>
        )
      }
    }

const mapStateToProps = state => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps)(User)
