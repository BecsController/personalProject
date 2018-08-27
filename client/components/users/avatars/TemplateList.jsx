import React from 'react'
import TemplateListItem from './TemplateListItem'

class TemplateList extends React.Component{

  render(){

    const results = this.props.data
    let templates = results.map(item =>

      <TemplateListItem
        url={item}
        propertyType = {this.props.propertyType}
        zIndex = {this.props.zIndex}
        addToCanvas = {this.props.addtocanvas}
        key={item}
        />
    )

    return(
      <div className="columns is-multiline is-gapless">
        <div className='column is-12 is-flex is-gaplesss'>
          <div className="is-flex is-gapless" id='avatar' style={{height: '28vw'}}>
            {templates}
          </div>
        </div>
      </div>
    )
  }
}

export default TemplateList
