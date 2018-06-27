import React from 'react'
import {Link} from 'react-router-dom'
import {getPages} from '../apiClient.js'

class StoriesPageOne extends React.Component {
  constructor (props){
    super (props)

    this.state = {
      pages: [],
      activePage: false,
      optionsVisible: false,
      pageTracker: 0
    }
  this.showAnswerOptions = this.showAnswerOptions.bind(this)
  this.hideAnswerOptions = this.hideAnswerOptions.bind(this)
  }

  componentDidMount () {
    getPages()
    .then(pages => {
      this.setState({pages})
    })
  }

  showAnswerOptions () {
  this.setState({
    optionsVisible: true
  })
}

  hideAnswerOptions () {
  this.setState({
    optionsVisible: false
  })
}

  render() {
    console.log(this.state)
  return (
    <div className="columns is-two-thirds">
      {this.state.pages.length > 0 && <div className="box column is-10 is-offset-1 page-template">
              <h1 className="has-text-centered is-size-2">{this.state.pages[this.state.pageTracker].title}</h1>
                <img className="school-bg-img" src={this.state.pages[this.state.pageTracker].background}/>
                 <div className="container is-full-height ">
                <img className="teacher" src={this.state.pages[this.state.pageTracker].population} alt="teacher"/>
                  <button id="anxious" className="is-hidden is-warning is-rounded button is-medium">{this.state.pages[this.state.pageTracker].emotionOne}</button>
                  <button id="excited" className="is-hidden is-warning button is-rounded is-medium is-pulled-right">{this.state.pages[this.state.pageTracker].emotionTwo}</button>
                  <button id="scared" className="is-hidden is-warning button is-rounded is-medium is-pulled-left">{this.state.pages[this.state.pageTracker].emotionThree}</button>
                  <div className="box column is-10 textarea">
                    <p className="has-text-centered is-size-4">
                      {this.state.pages[this.state.pageTracker].pageText}
                      <Link className="button is-medium is-pulled-right" to={`/story/Off%20To%20School/2`} onClick={this.AnswerOptions}>
                        Click to answer &nbsp;
                        <span className="icon">
                          <i className="far fa-arrow-alt-circle-right"></i>
                        </span>
                      </Link>
                    </p>
                    <button className="has-text-centered is-rounded is-medium is-size-4">
                      {this.state.pages[this.state.pageTracker].optionOne}
                    </button>
                    <button className="has-text-centered is-rounded is-medium is-size-4">
                      {this.state.pages[this.state.pageTracker].optionTwo}
                    </button>
                  </div>
          </div>
       </div>}
    </div>
  )
 }
}

export default StoriesPageOne
