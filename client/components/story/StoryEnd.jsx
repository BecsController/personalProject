import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {saveStory} from '../../actions/currentStory'

class StoryEnd extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      currentStory: this.props.currentStory
    }
  }

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head modal-color">
              <h1 className="modal-card-title is-size-1 has-text-link has-text-weight-bold">Congratulations {this.props.users.username}</h1>
            </header>

          <div className="modal-card-body modal-color">

          </div>

          <footer className="modal-card-foot">
            <button className="button is-medium is-link is-fullwidth is-rounded">
              Save Story
            </button>
            <Link to={`/user/${this.props.auth.user.id}`} className="button is-medium is-link is-fullwidth is-rounded">
              Back To Profile
            </Link>
            <Link to={`/stories`} className="button is-medium is-link is-fullwidth is-rounded">
              Start A New Story
            </Link>
          </footer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(StoryEnd)
