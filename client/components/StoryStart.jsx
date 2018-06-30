import React from 'react'
import {Link} from 'react-router-dom'
import {getStoryById} from '../apiClient.js'


class StoryStart extends React.Component {
  constructor (props) {
    super (props)

    this.state  = {
      story: []
    }
  }

  componentDidMount () {
    getStoryById(this.props.match.params.id)
    .then(story =>{
      this.setState({story})
    })
  }

  render () {
  return (
    <div className="columns is-two-thirds">
          <div className="box column is-8 is-offset-2">
            <h1 style={{marginLeft: '5vw'}} className="column is-10 is-size-1 has-text-grey">
            {this.state.story.title}
            </h1>
            <figure className="image column is-10">
              <img style={{width: '45vw', marginLeft: '10vw'}} src={this.state.story.image} />
            </figure>
            <Link className="button is-primary is-rounded is-outlined is-large" to={`/story/${this.state.story.id}/1`}>
              <i className="fas fa-play"></i>&nbsp;Click here to start
              </Link>
          </div>
    </div>
  )
 }
}

export default StoryStart
