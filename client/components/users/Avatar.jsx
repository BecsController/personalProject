import React from 'react'
import {fabric} from 'fabric'

import FabricCanvas from './FabricCanvas'
import TemplateList from './TemplateList'
import {facelist, eyeslist, hairlist} from '../../../public/images/templates/templatelist.js'

class Avatar extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      activeProperty: null
    }
  }

  addToCanvas = (imgElement, propertyType, z_index) => {
    let imgInstance = new fabric.Image(imgElement, {
      width: 400,
      height: 400,
      the_type: propertyType,
      zIndex: z_Index
    })
    this.setState({activeProperty: imgInstance})
  }

  render() {
    return (
      <div>
        <h1>Create your avatar!</h1>
          <div defaultActiveKey={1} justified id="main_tabs">
            <div eventKey={1} title="Faces">
              <TemplateList
                data = {facelist}
                propertyType = 'face'
                zIndex = {0}
                addtocanvas = {this.addToCanvas}
                />
            </div>
            <div eventKey={2} title="Eyes">
                <TemplateList
                  data = {eyeslist}
                  propertyType= "eyes"
                  zIndex = {2}
                  addtocanvas ={this.addToCanvas}
                />
              </div>
              <div eventKey={3} title="Hair">
                <TemplateList
                  data = {hairlist}
                  property_type= "hair"
                  zIndex = {2}
                  addtocanvas ={this.addToCanvas}
                />
                </div>
              </div>
              <FabricCanvas activeProperty = {this.state.activeProperty} />
      </div>
    )
  }
}

export default Avatar
