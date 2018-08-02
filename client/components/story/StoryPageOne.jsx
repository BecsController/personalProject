import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getPages} from '../../actions/stories'

import Options from '../popuplayers/Options'
import EmotionButtons from '../popuplayers/EmotionButtons'

class StoriesPageOne extends React.Component {
  constructor (props){
    super (props)

    this.state = {
      pages: [],
      optionsVisible: false,
      buttonsVisible: false,
      pageTracker: 0
    }
  this.showAnswerOptions = this.showAnswerOptions.bind(this)
  this.showEmotionButtons = this.showEmotionButtons.bind(this)
  this.chooseAnswer = this.chooseAnswer.bind(this)
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
    optionsVisible: true
  })
}

  chooseAnswer () {

  }

  showEmotionButtons () {
    this.setState ({
      buttonsVisible: true
    })
  }

  render() {
  return (
    <div className="columns is-two-thirds">
      {this.state.pages.length > 0 && <div className="column is-10 is-offset-1 page-template">
        <div className="box">
          <h1 className="has-text-centered is-size-2">{this.state.pages[this.state.pageTracker].title}</h1>
              <img style={{width: '50vw', position: 'absolute', zIndex: '0', top: '5vw', left: '20vw'}} src={this.state.pages[this.state.pageTracker].background}/>
                 <div className="container is-full-height ">
                   <img style={{width: '20vw', position: 'absolute', top: '-20vw', left: '-2vw', zIndex: '3'}} src={this.state.pages[this.state.pageTracker].population} alt="teacher"/>
                     <Link className="button is-medium" to={`#`} onClick={this.showEmotionButtons}>
                       How are you feeling?
                     </Link>
                    {this.state.buttonsVisible && <EmotionButtons page={this.state.pages} tracker={this.state.pageTracker}/>}
                      <div className="box column is-10 textarea">
                        <p className="has-text-centered is-size-4">
                          {this.state.pages[this.state.pageTracker].pageText}
                          <Link className="button is-medium is-pulled-right" to={`#`} onClick={this.showAnswerOptions}>
                            Click to answer &nbsp;
                          <span className="icon">
                          <i className="far fa-arrow-alt-circle-right"></i>
                          </span>
                          </Link>
                        </p>
                        {this.state.answerVisible && <Answers option={this.state.option}/>}
                        {this.state.optionsVisible && <Options page={this.state.pages} tracker={this.state.pageTracker}/>}
                      </div>
                  </div>
                </div>
       </div>}
    </div>
  )
 }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(StoriesPageOne)
