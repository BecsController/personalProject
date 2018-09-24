import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getSavedStories} from '../../actions/currentStory'


class SavedStories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStory: [],
      clickedStory: {},
      displayCurrent: false
    }
  this.displayStoryInfo = this.displayStoryInfo.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(getSavedStories())
  }

  componentWillReceiveProps(nextProps) {
    let saved = nextProps.currentStory[0]
    saved = saved.filter(stories => stories.user_id == this.props.auth.user.id)
    this.setState({
      currentStory: saved
    })
  }

  displayStoryInfo(story_id){
    let current = this.state.currentStory.find(story => story.id == story_id)
      current.answers = JSON.parse(current.answers)
      current.questions = JSON.parse(current.questions)
      current.emotions = JSON.parse(current.emotions)
    this.setState({
      clickedStory: current,
      displayCurrent: true
    })
  }

  render() {
    return (
      <div className="column is-10 is-offset-1 box">
        <p className="is-size-3 has-text-centered box">Click A Saved Story's Title To See More Information</p>
         <div className="box" style={{paddingBottom: '30vw', marginLeft: '.3vw', marginRight: '.3vw'}}>
          <div className="column is-multiline">
            {this.state.currentStory && this.state.currentStory.map((story, i) => {
              return (
                <div key={i} className="columns is-4 is-flex">
                  <a onClick={() => this.displayStoryInfo(story.id)}>{story.title}</a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(SavedStories)
