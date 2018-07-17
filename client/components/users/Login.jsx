import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser, loginError} from '../../actions/login'

class Login extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      name: '',
      password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
      this.submit = this.submit.bind(this)
    }
    componentDidMount() {
      this.props.dispatch(loginError(''))
    }
    updateDetails(e) {
      this.setState({[e.target.name]: e.target.value})
    }
    submit(e) {
      e.preventDefault()
      let {name, password} = this.state
      this.props.dispatch(loginUser({name, password}))
    }

  render() {
    const {auth} = this.props
    return (
      <div style={{marginBottom: '12vw'}} className="section column is-8 is-offset-2">
        <h1 style={{marginBottom: '2vw'}} className="is-size-1 is-fullwidth has-text-grey-light has-text-weight-bold">Login</h1>

        <form style={{marginBottom: '7vw'}} onSubmit={this.submit}>
          {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
          <div className="field control">
            <input className="input is-medium is-fullwidth" placeholder="Enter your name"
              name="name" onChange={this.updateDetails} value={this.state.name} />
          </div>

          <div className="field control">
            <input className="input is-medium is-fullwidth" placeholder="Enter your password"
              name="password" onChange={this.updateDetails} value={this.state.password} />
          </div>

          <input style={{marginTop: '.5vw'}} className="button is-info is-medium is-fullwidth" type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)
