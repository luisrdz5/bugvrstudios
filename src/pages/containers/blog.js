import React , { Component } from 'react'
import Header from '../../header/containers/header'
import Body from '../../body/containers/body'
import HomeContainer from '../components/homeContainer'
import Footer from '../../footer/containers/footer'
import HandleError from '../../error/containers/handleerror'
import data from '../../functionality.json'




class Home extends Component {

    render (){
        console.log(this.props)
        return (
            <HandleError props={this.props}>
                <HomeContainer>
                    <Header 
                        links={this.props.data.links}
                    /> 
                    <p> Aqui va el Blog </p>
                    <Footer data={this.props.data} />
                </HomeContainer>
            </HandleError>
        )
    }
}

export default Home