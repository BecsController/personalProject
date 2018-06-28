import React from 'react'
import {Link} from 'react-router-dom'
import {getPages} from '../apiClient.js'
import Options from './popuplayers/Options'
import EmotionButtons from './popuplayers/EmotionButtons'

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
  // this.hideAnswerOptions = this.hideAnswerOptions.bind(this)
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

  showEmotionButtons () {
    this.setState ({
      buttonsVisible: true
    })
  }
//   hideAnswerOptions () {
//   this.setState({
//     optionsVisible: false
//   })
// }

  render() {
  return (
    <div className="columns is-two-thirds">
      {this.state.pages.length > 0 && <div className="box column is-10 is-offset-1 page-template">
          <h1 className="has-text-centered is-size-2">{this.state.pages[this.state.pageTracker].title}</h1>
              <img className="school-bg-img" src={this.state.pages[this.state.pageTracker].background}/>
                 <div className="container is-full-height ">
                   <img className="teacher" src={this.state.pages[this.state.pageTracker].population} alt="teacher"/>
                     <Link className="button is-medium is-pulled-right" to={`#`} onClick={this.showEmotionButtons}>
                       Show emotion buttons
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
                        {this.state.optionsVisible && <Options page={this.state.pages} tracker={this.state.pageTracker}/>}
                      </div>
                  </div>
       </div>}
    </div>
  )
 }
}

export default StoriesPageOne
