import React from 'react'
import {Link} from 'react-router-dom'
import {getUser} from '../../apiClient.js'

class User extends React.Component {

  constructor(props) {
    super (props)

    this.state = {
      user: []
    }
  }

  componentDidMount () {
    getUser(this.props.match.params.id)
    .then(user =>{
      this.setState({user})
    })
  }

  render() {
    return (
      <div className="column has-text-centered is-10 is-offset-1">
        <h3 className="box is-size-1 has-text-grey-dark">{this.state.user.name}</h3>

        <div className="box is-multiline is-flex" id="grid">

          <div style={{width: '20vw', height: '25vw'}} className="box card-image">
            <figure className="image is-1by1">
              <img src={this.state.user.avatar} alt={this.state.user.name}/>
            </figure>
          </div>
          
          <div style={{width: '40vw'}} className="box">
            <h4 className="has-text-grey-dark">Email: {this.state.user.email}</h4>
            <h4 className="has-text-grey-dark">Stories: {this.state.user.saved_stories}</h4>
            {!this.state.user.saved_avatar &&<Link to={`/user/${this.state.user.id}/createAvatar`}><button style={{marginTop: '3vw'}} className="is-rounded button is-medium">Create Avatar</button>
        </Link>}
      </div>
      {this.state.user.saved_avatar && <div style={{width: '20vw', height: '25vw'}} className="box card-image">
      <figure className="image is -1by-1">
        <img src={this.state.user.saved_avatar} alt={this.state.user.name} />
      </figure>
      <Link style={{marginTop: '3vw'}} className="is-rounded button is-medium" to={`/user/${this.state.user.id}/editAvatar`}>
        Edit Avatar
      </Link>
    </div>}
    {this.state.user.saved_stories && <div className="box card-image">
      <ul>
        {this.state.user.saved_stories.map(story => {
          return (
            <li>story</li>
          )
        })}
      </ul>
    </div>}
  </div>
  <Link to={`/users`}><button className="button is-medium is-rounded is-link">Back To Users Page</button></Link>
</div>
)
}
}

export default User
