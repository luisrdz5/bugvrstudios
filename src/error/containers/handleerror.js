import React, { Component } from 'react'
import RegularError from '../components/regularerror'
import Footer from '../../footer/containers/footer'
import Header from '../../header/containers/header'

class HandleError extends Component{
    state = {
        handleError: false
    }
    componentDidCatch(error, info){
        //Envia el error a un servicio como Sentry
        this.setState({
            handleError: true
        }) 
    }
    render () {
        if (this.state.handleError){
            return (
                <div>
                    <Header 
                        links={this.props.props.data.links}
                    /> 
                    <RegularError />
                    <Footer data={this.props.props.data} />
                 </div>
            )
        }
        return this.props.children
    }
}

export default HandleError