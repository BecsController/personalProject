import React from 'react'
import {fabric} from 'fabric'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import FabricCanvas from './FabricCanvas'
import TemplateList from './TemplateList'
import {facelist, eyeslist, hairlist} from '../../../../public/images/templates/templatelist.js'

class Avatar extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      activeTab: 1,
    }
    this.changeActiveTab = this.changeActiveTab.bind(this)
  }

  changeActiveTab(tab) {
    this.setState({activeTab: tab})
    let currentTab = document.getElementById(tab)
    let elements = document.getElementsByTagName('li')

    for (let element of elements){
      element.classList.remove('is-active')
    }
    currentTab.classList.add('is-active')
  }

  addToCanvas = (imgElement, propertyType, zIndex) => {
    let imgInstance = new fabric.Image(imgElement, {
      width: 400,
      height: 400,
      theType: propertyType,
      zIndex: zIndex
    })
    this.setState({activeProperty: imgInstance})
  }

  renderTab(tab) {
    switch (tab) {
      case 1:
      return <TemplateList
        data-content="1"
        data = {facelist}
        propertyType = 'face'
        zIndex = '0'
        addtocanvas = {this.addToCanvas}
        />

      case 2:
      return <TemplateList
        data-content="2"
        data = {eyeslist}
        propertyType= "eyes"
        zIndex = '99'
        addtocanvas ={this.addToCanvas}
        />

      case 3:
      return <TemplateList
        data-content="3"
        data = {hairlist}
        propertyType= "hair"
        zIndex = '99'
        addtocanvas ={this.addToCanvas}
        />
      default:
      break
    }
  }

  render() {
  let activeUser = this.props.users
    return (
      <div>
        <h1 className="is-size-2">{activeUser.saved_avatar ? 'Change up yo avatar!' : 'Create your avatar!'}</h1>

        <div className='columns'>
          <div className='column is-6'>
            <FabricCanvas activeProperty = {this.state.activeProperty} activeUser = {this.props.match.params.id} />
            <Link className="is-pulled-center is-size-5" to={`/user/${this.props.match.params.id}`}>Back To Profile Page</Link>
          </div>

          <div style={{marginTop: '2vw'}} className='column is-6'>
            <div className='tabs is-toggle is-boxed is-full-width is-centered is-medium'>
              <ul>
                <li className='is-active' onClick={() => this.changeActiveTab(1)} id="1" title="Faces"><a>Faces</a></li>
                <li className='' onClick={() => this.changeActiveTab(2)} id="2" title="Eyes"><a>Eyes</a></li>
                <li className='' onClick={() => this.changeActiveTab(3)} id="3" title="Hair"><a>Hair</a></li>
              </ul>
            </div>

            <div className="tab-content box is-flex wrap">
              {this.renderTab(this.state.activeTab)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Avatar)
