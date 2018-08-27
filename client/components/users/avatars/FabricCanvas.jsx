import React from 'react';
import {fabric} from 'fabric';
import {connect} from 'react-redux'

import {getUserById, addAvatar} from '../../../actions/users'

class FabricCanvas extends React.Component{
  constructor (props) {
    super (props)

    this.state = {
    user: []
  }
}

  componentDidMount(){
    // Make a New Canvas
    this.the_canvas = new fabric.StaticCanvas('main-canvas', {
      preserveObjectStacking: true,
      height:375,
      width:375,
    })
    this.setState({
      user: this.props.users
    })
  }

  componentWillReceiveProps = (nextProps) =>{
    if(nextProps.activeProperty !== this.props.activeProperty){
      this.updateCanvasforImage(this.props.activeProperty,nextProps.activeProperty);
    }
    this.setState({
      user: nextProps.user
    })
  }

  updateCanvasforImage = (prev,next) => {
    if(next){
      let to_remove
      // Find the same kind of element
      this.the_canvas.forEachObject( (object) => {

        if(object.the_type === next.the_type){
          to_remove = object
        }
      } )
      this.the_canvas.remove(to_remove)
      this.the_canvas.add(next)
      this.the_canvas.moveTo(next, next.zIndex)
    }
  }

  saveToCanvas = () => {
    let link = document.createElement("a")
    link.href = this.the_canvas.toDataURL({format: 'png'})
    link.download = "avatar.png";
    link.click()
  }

  saveToProfile = () => {
    let message = document.getElementsByTagName('h3')[0]
    message.classList.remove('is-hidden')
    let saveLink = this.the_canvas.toDataURL({format: 'png'})
    let id = this.props.activeUser
      this.state.user.saved_avatar = saveLink
      this.props.dispatch(addAvatar(id, this.state.user))
  }

  render(){

    return (
      <div className= "main-canvas-container has-text-centered">
        <div style={{marginTop: '2vw'}}>
          <h3 className="is-hidden is-size-4 is-uppercase">Thanks! That's saved</h3>
        </div>

        <canvas style={{border: '3px solid black', float: 'center'}} id= 'main-canvas'></canvas>

        <div style={{marginTop: '2.5vw', marginLeft: '10vw', marginBottom: '2vw'}}>
          <button className="is-rounded button is-medium is-pulled-left is-outlined" onClick = {this.saveToProfile}>
            Save Avatar To Profile
          </button>
          <button className="is-rounded button is-medium is-outlined" onClick = {this.saveToCanvas}>
            Download Avatar
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps)(FabricCanvas)
