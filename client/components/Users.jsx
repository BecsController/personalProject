import React from 'react'
import {Link} from 'react-router-dom'
import {getUsers} from '../apiClient.js'

class Users extends React.Component {

  constructor(props) {
    super (props)

    this.state = {
      users: []
    }
  }

  componentDidMount () {
    getUsers()
    .then(users =>{
      console.log(users)
      this.setState({users})
    })
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
            <div className="columns box is-multiline" id="grid">

              {this.state.users.map(item => {
                return (
                  <div key={item.name} className="column is-3 is-3-widescreen is-flex">
                    <div className="card is-flex" style={{width: '30vw', height: '20vw'}}>
                      <Link to={`/user/${item.name}`}>
                        <div className="card-title title is-3">
                          <h3 className="has-text-grey-dark">{item.name}</h3>
                          </div>

                        <div style={{marginLeft: '1.7vw', width: '15vw', height: '15vw'}} className="box card-image">
                          <figure className="image is-1by1">
                            <img src={item.avatar} alt={item.name}/>
                          </figure>
                        </div>
                      </Link>
                    </div>
                  </div>
                )})}
          </div>
        </div>

        <div className="column is-10 is-offset-1">
          <div className="box">
          <h3 className="has-text-centered is-size-1 has-text-grey">
            Click your profile picture to edit your profile
          </h3>
          </div>
        </div>
    </div>
  )
 }
}

export default Users
