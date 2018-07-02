import React from 'react'
import TemplateListItem from './TemplateListItem'

class TemplateList extends React.Component{

    render(){

        const results = this.props.data
        let templates = results.map(item =>

            <TemplateListItem
                url={item}
                propertyType = {this.props.property_type}
                zIndex = {this.props.zIndex}
                addToCanvas = {this.props.addtocanvas}
                key={item}
            />
        )

        return(

            <div>
               {templates}
            </div>
        )
    }
}

export default TemplateList
