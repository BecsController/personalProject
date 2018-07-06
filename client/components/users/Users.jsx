import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getUsers} from '../../actions/users'

class Users extends React.Component {

  constructor(props) {
    super (props)

    this.state = {
      users: []
    }
  }

  componentDidMount () {
    this.props.dispatch(getUsers())
  }

  componentWillReceiveProps (nextProps){
    this.setState({
      users: nextProps.users
    })
  }

  renderUsers (users) {
    return (
  <div className="columns box is-multiline" id="grid">
      {users.map(item => (
          <div key={item.name} className="column is-3 is-3-widescreen is-flex">
            <div className="card is-flex" style={{width: '30vw', height: '20vw'}}>
              <Link to={`/user/${item.id}`}>
                <div className="card-title title is-3">
                  <h3 className="has-text-grey-dark">{item.name}</h3>
                </div>

                <div style={{marginLeft: '1.7vw', width: '15vw', height: '15vw'}} className="box card-image">
                  <figure className="image is-1by1">
                    {!item.saved_avatar && <img src={item.avatar} alt={item.name}/>}
                    {item.saved_avatar && <img src={item.saved_avatar} alt={item.name}/>}
                  </figure>
                </div>
              </Link>
            </div>
          </div>
        ))}
  </div>
  )
}

    render() {
      return (
        <div>
          <div className="column top-box box is-10 is-offset-1">
            <h1 className="has-text-centered is-size-1 has-text-grey">
              Choose your profile
            </h1>
          </div>

          <div className="column is-10 is-offset-1">
              {this.renderUsers(this.state.users)}
          </div>

          <div className="column is-10 is-offset-1">
            <div className="box">
              <h3 className="has-text-centered is-size-1 has-text-grey">
                Click your profile picture to edit your profile and create an Avatar
              </h3>
            </div>
          </div>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    console.log(state)
    return {
      users: state.users
    }
  }

  export default connect(mapStateToProps)(Users)
