import React , { Component } from 'react'
import Header from '../../header/containers/header'
import Body from '../../body/containers/body'
import HomeContainer from './homeContainer'
import Footer from '../../footer/containers/footer'


class Home extends Component {
    render (){
        return (
            <HomeContainer>
                <Header 
                    links={this.props.data.links}
                /> 
                <Body data={this.props.data.siteInformation} />
                <Footer data={this.props.data} />
            </HomeContainer>
        )
    }
}

export default Home