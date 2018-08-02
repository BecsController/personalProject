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
        <div className="column is-10 is-offset-1 box">
          <h1 className="has-text-centered is-size-1 has-text-grey">
            Welcome to the Stories Page
          </h1>
        </div>

        <div className="columns is-two-thirds">

          <div className="column is-offset-1 is-2 is-2-widescreen">
            <div className="menu box">
              <p className="menu-label">
                Filter by genre
              </p>
              <ul className="menu-list">
                <li><a className="is-active" data-action="filter" data-group href="#">All</a></li>
                <li><a data-action="filter" data-group="school" href="#">School stories</a></li>
                <li><a data-action="filter" data-group href="#">Out and About</a></li>
                <li><a data-action="filter" data-group href="#">Behaviour</a></li>
              </ul>
            </div>
          </div>

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
