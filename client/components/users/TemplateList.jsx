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

            <div className="card is-flex" style={{height: '15vw'}}>
               {templates}
            </div>
        )
    }
}

export default TemplateList
