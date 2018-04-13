import React , { Component } from 'react'
import Header from '../../header/containers/header'
import HomeContainer from '../components/homeContainer'
import Footer from '../../footer/containers/footer'
import HandleError from '../../error/containers/handleerror'




class Home extends Component {

    render (){
        return (
            <HandleError props={this.props}>
                <HomeContainer>
                    <Header 
                        links={this.props.data.links}
                    /> 
                    <p> Aqui va el Portfolio </p>
                    <Footer data={this.props.data} />
                </HomeContainer>
            </HandleError>
        )
    }
}

export default Home