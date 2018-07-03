import React from 'react'

export default class TemplateListItem extends React.Component{

    localAddToCanvas = (e) => {
        e.preventDefault()
        this.props.addToCanvas(e.target, this.props.propertyType, this.props.zIndex)
    }

    render(){

        return(

              <div style={{width: '15vw', height: '15vw'}} className="box card-image">
                <a href="#" className="thumbnail" onClick={this.localAddToCanvas}>
                    <img alt ="" src={this.props.url} />
                </a>
            </div>
        )
    }
}
