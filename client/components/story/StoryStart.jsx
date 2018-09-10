import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getStoryById} from '../../actions/stories'


class StoryStart extends React.Component {
  constructor (props) {
    super (props)

    this.state  = {
      story: []
    }
  }

componentDidMount () {
  this.props.dispatch(getStoryById(this.props.match.params.id))
}

componentWillReceiveProps (nextProps) {
    this.setState({
      story: nextProps.stories
    })
  }

  render () {
    return (
      <div className="columns is-two-thirds">
        <div className="box column is-8 is-offset-2 has-text-centered">
          <h1 style={{marginLeft: '5vw'}} className="is-size-1 has-text-grey">
            {this.state.story.title}
          </h1>

          <figure className="image column is-10">
            <img style={{width: '45vw', marginLeft: '10vw'}} src={this.state.story.image} />
          </figure>

          <Link className="button is-primary is-rounded is-outlined is-large" to={`/story/${this.state.story.id}/current`}>
            <i className="fas fa-play"></i>&nbsp;Click here to start
            </Link>

          </div>
        </div>
      )
    }
  }

  const mapStateToProps = state => state

  export default connect(mapStateToProps)(StoryStart)
