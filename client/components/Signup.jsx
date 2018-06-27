import React from 'react'

const newUser = {
  name: '',
  email: '',
  avatar: ''
}

class Signup extends React.Component {
      constructor (props) {
        super (props)

        this.state = {
          user: {...newUser}
        }
        this.submit = this.submit.bind(this)
        this.updateUser = this.updateUser.bind(this)
      }

      submit(e) {
        e.preventDefault()
        const user = this.state.user
        this.props.addUser(user)
        this.setState({
          user: {...newUser}
        })
      }

      updateUser(e) {
        const user = this.state.user
        user[event.target.name] = event.target.value

        this.setState ({
          user
        })
      }

    render() {

  return (
    <div className="hero-body columns">
      <div className="column is-6 is-offset-3">
      <h1 className="is-size-1 has-text-grey-light">
        Welcome to StoryTime
      </h1>

      <div className="box">
        <figure className="image is-3by2">
            <img src="/images/smallbook.jpg"/>
        </figure>
      </div>

      <h2 className="is-size-3 is-spaced has-text-grey-dark">Let's get started!</h2>

    <form onSubmit={this.submit}>
      <div className="field control">
        <input className="input is-medium" placeholder="Enter your name"
          name="name" onChange={this.updateUser} />
      </div>

      <div className="field control">
        <input className="input is-medium" placeholder="Enter your email"
          name="email" onChange={this.updateUser} />
      </div>

      <div className="field control">
        <input className="input is-medium" placeholder="Insert Image URL"
          name="avatar" onChange={this.updateUser} />
      </div>

      <input className="button is-info is-medium" type="submit" value="Create Profile"/>
    </form>

    </div>
  </div>
  )
 }
}

export default Signup
