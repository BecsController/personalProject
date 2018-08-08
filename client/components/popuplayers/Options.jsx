import React from 'react'
import {connect} from 'react-redux'

class Options extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
    pages: [],
  }
}

componentDidMount () {
  this.props.dispatch(getPages())
}

componentWillReceiveProps(nextProps){
  this.setState({
    pages: nextProps.pages,
  })
}

render () {
  console.log(this.state)
    return (
      <div>
        <button className="button has-text-centered is-rounded is-medium is-size-4 is-info is-pulled-left">
          {this.state.pages[0]}
        </button>
        <button className="button has-text-centered is-rounded is-medium is-size-4 is-info is-pulled-right">
          {this.state.pages[0]}
        </button>
      </div>
    )
  }
}

const mapStateToProps =  (pages) => {
  return { pages }
}
export default connect(mapStateToProps)(Options)
