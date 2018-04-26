import React , { Component } from 'react'
import Header from '../../header/containers/header'
import Body from '../../body/containers/body'
import HomeContainer from '../components/homeContainer'
import Footer from '../../footer/containers/footer'
import HandleError from '../../error/containers/handleerror'
import BlogContent from '../../blog/containers/blogContent'
import firebase from 'firebase'
import LoginModal from '../../widgets/containers/loginmodal'
import Modal from '../../widgets/components/modal'
import About from '../../about/containers/about'
import Portafolio from '../../portafolio/containers/portafolio'



class Home extends Component {
        state = {
            user: null,
            modalVisible: false
        }


    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user,
                modalVisible: false
            })
        })
    }

    handleOpenModal = event => {
        event.preventDefault();
        this.setState({
            modalVisible: true,
        })
    }
    handleCloseModal = event => {
        this.setState({
            modalVisible: false,
        })
    }
    handleReceivedata(type) {
        console.log(type)
    }
    
    handleAuth(type) {
       // event.preventDefault();
        console.log(type)
        let provider 
        if (type =='Facebook'){
                provider = new firebase.auth.FacebookAuthProvider();
                firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    console.log(`${result.user} ha iniciado sesion`)
                    })
                .catch(error => console.log(`Error ${error.code}: ${error.message}`))
        }
        if (type =='Google'){
                provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    console.log(`${result.user} ha iniciado sesion`)
                   })
                .catch(error => console.log(`Error ${error.code}: ${error.message}`))
        }
        if (type=='Twitter'){
                provider = new firebase.auth.TwitterAuthProvider();
                firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    console.log(`${result.user} ha iniciado sesion`)
                   })
                .catch(error => console.log(`Error ${error.code}: ${error.message}`))
        }
        // const provider = new firebase.auth.GoogleAuthProvider()


    }
    handleLogout (){
        firebase.auth().signOut()
        .then(result => console.log(`${result.user} ha cerrado Sesion`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`))
    }

    render (){
        switch(this.props.Type){
            case "Blog":
                return (
                    <HandleError props={this.props}>
                        <HomeContainer>
                        {
                            this.state.modalVisible &&
                            <LoginModal >
                                <Modal     
                                    handleAuth={this.handleAuth} 
                                    handleClick={this.handleCloseModal} 
                                    data={this.props.data.buttonsSocialNetworks} 
                                />
                            </LoginModal>
                        }
                            <Header 
                                links={this.props.data.links}
                            /> 
                            <BlogContent 
                                data={this.props.data.etiquetasBlog[0]} 
                                handleOpenModal={this.handleOpenModal} 
                                user={this.state.user}  
                                handleLogout={this.handleLogout}  
                            />
                            <Footer data={this.props.data} />
                        </HomeContainer>
                    </HandleError>
                )
            case "Portafolio":
                return (
                    <HandleError props={this.props}>
                        <HomeContainer>
                            <Header 
                                links={this.props.data.links}
                            /> 
                            <Portafolio 
                               data={this.props.data.etiquetasPortafolio[0]}
                            />
                            <Footer data={this.props.data} />
                        </HomeContainer>
                    </HandleError>
                )
            case "About":
                return (
                    <HandleError props={this.props}>
                        <HomeContainer>
                            <Header 
                                links={this.props.data.links}
                            /> 
                            <About 
                                data={this.props.data.etiquetasAbout[0]} 
                                team={this.props.data.team[0]}
                            />
                            <Footer data={this.props.data} />
                        </HomeContainer>
                    </HandleError>
                )

            default: 
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
}

export default Home