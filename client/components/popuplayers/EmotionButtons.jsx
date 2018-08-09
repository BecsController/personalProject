import React from 'react'
import {connect} from 'react-redux'

class EmotionButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    chosenEmotion: ''
  }
  this.handleClick = this.handleClick.bind(this)
}

  handleClick(e) {
    this.setState ({
      chosenEmotion: e.currentTarget.value
    })
}

  render() {
    return (
      <div>
        <button className="is-warning is-fullwidth button is-medium" onClick={(e) => this.handleClick(e)} value="anxious">
          {this.props.page[this.props.tracker].emotionOne}
        </button>
        <hr />
        <button className="is-warning is-fullwidth button is-medium" onClick={(e) => this.handleClick(e)} value="excited">
          {this.props.page[this.props.tracker].emotionTwo}
        </button>
        <hr />
        <button className="is-warning is-fullwidth button is-medium" onClick={(e) => this.handleClick(e)} value="scared">
          {this.props.page[this.props.tracker].emotionThree}
        </button>
      </div>
    )
  }
}


const mapStateToProps = state => state

export default connect(mapStateToProps)(EmotionButtons)
