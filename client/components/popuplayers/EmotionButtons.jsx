import React from 'react'
import {connect} from 'react-redux'

import {newEmotion, getAssociations} from '../../actions/associations'

class EmotionButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    chosenEmotion: '',
    associations: []
  }
  this.handleClick = this.handleClick.bind(this)
}

  handleClick(e) {
let currentEmotion = e.currentTarget.value.toString()
    this.setState ({
      chosenEmotion: currentEmotion
    })
  console.log(this.state.chosenEmotion);
  let association = {
    page_id: this.props.tracker,
    emotion: this.state.chosenEmotion,
    user_id: this.props.auth.user.id
  }
console.log(association);
  this.props.dispatch(newEmotion(association))
console.log(this.state.associations);
}

componentDidMount () {
  this.props.dispatch(getAssociations())
}

componentWillReceiveProps (nextProps) {
  this.setState({
    assocations: nextProps.associations
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
