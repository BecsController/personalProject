import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getStories} from '../../actions/stories'

class Filter extends React.Component {
  constructor (props){
    super (props)
    this.state = {
      stories: [],
      activeGenre: 'All'
    }
  this.changeActiveListItem = this.changeActiveListItem.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(getStories())
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      stories: nextProps.stories
    })
  }

  changeActiveListItem(value, e) {
    e.preventDefault()
    let current = document.getElementById(value)
    let elements = document.getElementsByTagName('a')

    for (let element of elements){
      element.classList.remove('is-active')
    }
    current.classList.add('is-active')

    this.setState({
      activeGenre: value
    })
  }

  render() {
    return (
      <div className="column is-offset-1 is-2 is-2-widescreen">
        <div className="menu box">
          <p className="menu-label">
            Filter by genre
          </p>
          <ul className="menu-list">
            <li><a className="is-active" id="All" href="#" onClick={(e) => this.changeActiveListItem("All", e)} value="All">All</a></li>
            <li><a className='' id="School" href="#" onClick={(e) => this.changeActiveListItem("School", e)} value="School">School stories</a></li>
            <li><a className='' id="Trips" href="#" onClick={(e) => this.changeActiveListItem("Trips", e)} value="Trips">Out and About</a></li>
            <li><a className='' id="Behaviour" href="#" onClick={(e) => this.changeActiveListItem("Behaviour", e)} value="Behaviour">Behaviour</a></li>
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
