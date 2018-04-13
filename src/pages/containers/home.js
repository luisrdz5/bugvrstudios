import React , { Component } from 'react'
import Header from '../../header/containers/header'
import Body from '../../body/containers/body'
import HomeContainer from '../components/homeContainer'
import Footer from '../../footer/containers/footer'
import HandleError from '../../error/containers/handleerror'


class Home extends Component {
    state = {
        user: null
    }

    render (){
        return (
            <HandleError props={this.props}>
                <HomeContainer>
                    <Header 
                        links={this.props.data.links}
                    /> 
                    <Body data={this.props.data.siteInformation} />
                    <Footer data={this.props.data} />
                </HomeContainer>
            </HandleError>
        )
    }
}

export default Home