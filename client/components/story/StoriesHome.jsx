import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getStories} from '../../actions/stories'

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
        <div className="columns is-two-thirds">
          <div className="column is-10 is-offset-1">
            <div className="box top-box">
              <h1 className="has-text-centered is-size-1 has-text-grey">
                Welcome to the Stories Page
              </h1>
            </div>
          </div>
        </div>

        <div className="columns is-two-thirds">
          <div className="column is-offset-1 is-2 is-2-widescreen">
            <div className="menu box">
              <p className="menu-label">
                Filter by genre
              </p>
              <ul className="menu-list">
                <li>
                  <a className="is-active" data-action="filter" data-group href="/stories">All</a>
                </li>
                <li>
                  <a data-action="filter" data-group="school" href="/stories/school">School stories</a>
                </li>
                <li>
                  <a data-action="filter" data-group href="/stories/outandabout">Out and About</a>
                </li>
                <li>
                  <a data-action="filter" data-group href="/stories/behaviour">Behaviour</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="column is-8">
            <div className="box">
              <div className="columns is-multiline" id="grid">
                {this.state.stories.map(story => {
                  return (
                    <div key={story.key} className="column is-3 is-3-widescreen is-flex">
                      <div className="card">
                        <Link to={`/story/${story.id}`}>
                          <div className="card-title title is-4">
                            <h3 className="has-text-grey-dark">{story.title}</h3>
                          </div>
                          <div className="box card-image">
                            <figure className="image is-1by1">
                              <img src={story.image} alt={story.title}/>
                            </figure>
                          </div>
                          <div className="card-body">
                            <div className="box">
                              <p>
                                {story.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )})}
                </div>
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
