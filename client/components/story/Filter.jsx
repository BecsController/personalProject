import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getStories} from '../../actions/stories'

class Filter extends React.Component {
  constructor (props){
    super (props)
    this.state = {
      stories: []
    }
  this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(getStories())
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      stories: nextProps.stories
    })
  }

  handleClick(e) {
  e.preventDefault()
  console.log(e.currentTarget.value)
}

  render() {
    return (
      <div className="column is-offset-1 is-2 is-2-widescreen">
        <div className="menu box">
          <p className="menu-label">
            Filter by genre
          </p>
          <ul className="menu-list">
            <li><a className="is-active" data-action="filter" href="#" onClick={(e) => this.handleClick(e)} value="all">All</a></li>
            <li><a data-action="filter" value="school" href="#" onClick={(e) => this.handleClick(e)}>School stories</a></li>
            <li><a data-action="filter" value="trips" href="#" onClick={(e) => this.handleClick(e)}>Out and About</a></li>
            <li><a data-action="filter" value="behaviour" href="#" onClick={(e) => this.handleClick(e)}>Behaviour</a></li>
          </ul>
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

export default connect(mapStateToProps)(Filter)
