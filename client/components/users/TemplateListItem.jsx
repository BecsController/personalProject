import React from 'react'

export default class TemplateListItem extends React.Component{

    localAddToCanvas = (e) => {
        e.preventDefault()
        this.props.addToCanvas(e.target, this.props.property_type, this.props.zIndex)
    }

    render(){

        return(

            <div >
                <a href="#" className="thumbnail" onClick={this.localAddToCanvas}>
                    <img alt ="" src={this.props.url} />
                </a>
            </div>
        )
    }
}
