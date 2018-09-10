import React from 'react'
import {connect} from 'react-redux'

class BlankModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    return <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head modal-color">
          <p className="modal-card-title">Mission Intentions</p>
        </header>

        <footer className="modal-card-foot  modal-color">
          <button onClick={this.props.hideModal} className="button is-dark is-fullwidth">Close</button>}
        </footer>
      </div>
    </div>
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(BlankModal)
