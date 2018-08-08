import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getPages} from '../../actions/stories'

import EmotionButtons from '../popuplayers/EmotionButtons'

class StoriesPage extends React.Component {
  constructor (props){
    super (props)

    this.state = {
      pages: [],
      optionsVisible: false,
      buttonsVisible: false,
      pageTracker: 0,
      selectorVisible: true
    }
    this.showAnswerOptions = this.showAnswerOptions.bind(this)
    this.showEmotionButtons = this.showEmotionButtons.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(getPages())
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      pages: nextProps.pages
    })
  }

  showAnswerOptions () {
    this.setState({
      optionsVisible: true,
      selectorVisible: false
    })
  }

  showEmotionButtons () {
    let emotionState = this.state.buttonsVisible ? false : true
    this.setState ({
      buttonsVisible: emotionState
    })
  }

  render() {
    return (
      <div className="columns is-two-thirds">

        <div className="column is-2">
          <Link className="button is-medium" to={`#`} onClick={this.showEmotionButtons}>
            How are you feeling?
          </Link>
          <hr />
          {this.state.buttonsVisible && <EmotionButtons page={this.state.pages} tracker={this.state.pageTracker}/>}
        </div>

        {this.state.pages.length > 0 && <div className="column is-10 box">
          <h1 className="has-text-centered is-size-2">{this.state.pages[this.state.pageTracker].title}</h1>
          <img className="background-img" src={this.state.pages[this.state.pageTracker].background}/>
          <img className="population-img" src={this.state.pages[this.state.pageTracker].population} alt="people"/>

          <div className="textarea box">
            <p className="has-text-centered is-size-4">
              {this.state.pages[this.state.pageTracker].pageText}
              {this.state.selectorVisible && <Link className="button is-medium is-pulled-right" to={`#`} onClick={this.showAnswerOptions}>
              Click to answer &nbsp;
              <span className="icon"><i className="far fa-arrow-alt-circle-right"></i></span>
            </Link>}
          </p>
            {this.state.optionsVisible && <div className="box">
              <button className="button has-text-centered is-rounded is-medium is-size-4 is-info is-pulled-left">
                {this.state.pages[this.state.pageTracker].optionOne}
              </button>
              <button className="button has-text-centered is-rounded is-medium is-size-4 is-info is-pulled-right">
                {this.state.pages[this.state.pageTracker].optionTwo}
              </button>
            </div>}
        </div>
      </div>}
    </div>
  )
}
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(StoriesPage)
