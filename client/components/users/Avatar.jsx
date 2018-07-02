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
        <h1 className="is-size-2">Create your avatar!</h1>
        <div className='tabs is-toggle is-boxed is-full-width is-centered is-medium'>
          <ul>
            <li className='is-active' data-tab="1" title="Faces"><a>Faces</a></li>
              <li data-tab="2" title="Eyes"><a>Eyes</a></li>
                <li data-tab="3" title="Hair"><a>Hair</a></li>
                </ul>
              </div>

                <div className="tab-content">

            <TemplateList className='is-active'
                data-content="1"
                data = {facelist}
                propertyType = 'face'
                zIndex = '0'
                addtocanvas = {this.addToCanvas}
                />


              <TemplateList
                data-content="2"
                data = {eyeslist}
                propertyType= "eyes"
                zIndex = '2'
                addtocanvas ={this.addToCanvas}
                />


              <TemplateList
                data-content="3"
                data = {hairlist}
                propertyType= "hair"
                zIndex = '2'
                addtocanvas ={this.addToCanvas}
                />


      </div>
        <FabricCanvas activeProperty = {this.state.activeProperty} />
        </div>
      )
    }
  }

  export default Avatar
