import React from 'react'
import {connect} from 'react-redux'

import {getPages} from '../../actions/stories'

class Options extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
    pages: [],
    currentPage: props.page
  }
}

componentDidMount () {
  this.props.dispatch(getPages())
}

componentWillReceiveProps(nextProps){
  this.setState({
    pages: nextProps.pages,
    currentPage: nextProps.page
  })
}

render () {
    return (
      <div>
        <button className="button has-text-centered is-rounded is-medium is-size-4 is-info is-pulled-left">
          {this.state.pages[this.state.currentPage]}
        </button>
        <button className="button has-text-centered is-rounded is-medium is-size-4 is-info is-pulled-right">
          {this.state.pages[this.state.currentPage]}
        </button>
      </div>

    )
  }
}

const mapStateToProps =  (state) => {
  return {
    pages: state.pages
  }
}
export default connect(mapStateToProps)(Options)
