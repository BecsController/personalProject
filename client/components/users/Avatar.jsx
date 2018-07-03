import React from 'react'
import {fabric} from 'fabric'

import FabricCanvas from './FabricCanvas'
import TemplateList from './TemplateList'
import {facelist, eyeslist, hairlist} from '../../../public/images/templates/templatelist.js'

class Avatar extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      activeTab: 1
    }
    this.changeActiveTab = this.changeActiveTab.bind(this)
  }

  changeActiveTab(tab) {
    this.setState({activeTab: tab});
  }

  addToCanvas = (imgElement, propertyType, zIndex) => {
    let imgInstance = new fabric.Image(imgElement, {
      width: 400,
      height: 400,
      the_type: propertyType,
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
    console.log(this.state.activeTab)
    return (
      <div>
        <h1 className="is-size-2">Create your avatar!</h1>
        <div className='tabs is-toggle is-boxed is-full-width is-centered is-medium'>
          <ul>
            <li className="is-active" onClick={() => this.changeActiveTab(1)} data-tab="1" title="Faces"><a>Faces</a></li>
            <li onClick={() => this.changeActiveTab(2)} data-tab="2" title="Eyes"><a>Eyes</a></li>
            <li onClick={() => this.changeActiveTab(3)} data-tab="3" title="Hair"><a>Hair</a></li>
          </ul>
        </div>

        <div className="tab-content">

        {this.renderTab(this.state.activeTab)}


        </div>
        <FabricCanvas activeProperty = {this.state.activeProperty} />
      </div>
    )
  }
}

export default Avatar
