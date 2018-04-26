import React, { Component } from 'react'
import PortafolioComponent from '../components/portafoliocomponent'



class Portafolio extends Component {


    render () {
        return (
        <div className="container">
            <div className="col s12">
                <h2 className="header">{this.props.data.Header}</h2>
            </div>
            <PortafolioComponent 
            />
        </div>
        )
    }
}

export default Portafolio