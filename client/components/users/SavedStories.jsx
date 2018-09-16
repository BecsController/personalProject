import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getSavedStories} from '../../actions/currentStory'


class SavedStories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStory: []
    }
  this.displayStoryInfo = this.displayStoryInfo.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(getSavedStories())
  }

  componentWillReceiveProps(nextProps) {
    let saved = nextProps.currentStory[0]
    console.log(saved);
    saved.filter(stories => stories.user_id != this.props.auth.user.id)
    console.log(saved);
    this.setState({
      currentStory: saved
    })
  }

  displayStoryInfo(){
    alert("Display stuff")
  }

  render() {
    return (
      <div className="column is-10 is-offset-1 box">
        <p className="is-size-3 has-text-centered box">Click A Saved Story's Title To See More Information</p>
         <div className="box" style={{paddingBottom: '30vw', marginLeft: '.3vw', marginRight: '.3vw'}}>
          <div className="column is-multiline">
            {this.state.currentStory && this.state.currentStory.map(story => {
              return (
                <div className="columns is-4 is-flex">
                  <a onClick={() => this.displayStoryInfo()}>{story.title}</a>
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
