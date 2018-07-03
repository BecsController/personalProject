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
      console.log(user)
      this.setState({user})
    })
  }

  render() {
    return (
      <div className="column is-10 is-offset-1">
        <div className="columns box is-multiline" id="grid">
          <div key={this.state.user.name} className="column is-3 is-3-widescreen is-flex">

            <div className="card is-flex" style={{height: '20vw'}}>
              <div style={{width: '100%'}} className="card-title title is-3">
                <h3 className="has-text-grey-dark">{this.state.user.name}</h3>
              </div>

              <div style={{marginTop: '5vw', width: '30vw', height: '15vw'}} className="box card-image">
                <figure className="image is-1by1">
                  <img src={this.state.user.avatar} alt={this.state.user.name}/>
                </figure>
              </div>
            </div>
            <div className="box">
              <h4 className="has-text-grey-dark">Email: {this.state.user.email}</h4>
              <h4 className="has-text-grey-dark">Stories: {this.state.user.saved_stories}</h4>
            <Link to={`/user/${this.state.user.id}/createAvatar`}><button className="is-rounded button is-medium">Create Avatar</button>    
            </Link>
            </div>
            {this.state.user.saved_avatar && <div className="box card-image">
              <figure className="image is -1by-1">
                <img src={this.state.user.saved_avatar} alt={this.state.user.name} />
              </figure>
              <Link className="is-rounded button is-medium" to={`/user/${this.state.user.id}/editAvatar`}>
                Edit Avatar
              </Link>
            </div>}
          </div>
        </div>
      </div>
    )
  }
}

export default User
