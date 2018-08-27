import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getStories} from '../../actions/stories'
import Filter from './Filter'

class StoriesHome extends React.Component {
  constructor (props){
    super (props)
    this.state = {
      stories: []
    }
  }

  componentDidMount () {
    this.props.dispatch(getStories())
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      stories: nextProps.stories
    })
  }
  render() {

    return (
      <div>
        <div className="column is-10 is-offset-1 box">
          <h1 className="has-text-centered is-size-1 has-text-grey">
            Welcome to the Stories Page
          </h1>
        </div>

        <div className="columns is-two-thirds">

          <Filter />

          <div className="column is-8 box">
            <div className="columns is-multiline" id="grid">
              {this.state.stories.map(story => (
                <div key={story.title} className="column is-3 is-3-widescreen is-flex">
                  <Link to={`/story/${story.id}`}>
                    <h3 className="title is-4 has-text-grey-dark">{story.title}</h3>
                    <figure className="image box is-1by1">
                      <img src={story.image} alt={story.title}/>
                    </figure>
                    <p className="box description">{story.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stories: state.stories
  }
}

export default connect(mapStateToProps)(StoriesHome)
