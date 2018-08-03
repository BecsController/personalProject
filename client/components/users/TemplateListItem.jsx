import React from 'react'

export default class TemplateListItem extends React.Component{

    localAddToCanvas = (e) => {
        e.preventDefault()
        this.props.addToCanvas(e.target, this.props.propertyType, this.props.zIndex)
    }

    render(){

        return(

              <div style={{height: '13vw'}} className="box is-3 column is-gapless">
                <a href="#" onClick={this.localAddToCanvas}>
                    <img alt ="" src={this.props.url} />
                </a>
            </div>
        )
    }
}
