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



        let provider 
        switch(type){
            case 'Facebook':
                provider = new firebase.auth.FacebookAuthProvider();
            case 'Google':
                provider = new firebase.auth.GoogleAuthProvider();
            case 'Twitter':
                provider = new firebase.auth.TwitterAuthProvider();
            case 'Email':
        }
        // const provider = new firebase.auth.GoogleAuthProvider()

         firebase.auth().signInWithPopup(provider)
         .then((result) => {
             console.log(`${result.user} ha iniciado sesion`)
            })
         .catch(error => console.log(`Error ${error.code}: ${error.message}`))
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
                            <p> Aqui va el Portfolio </p>
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
                            <p> Aqui va el about </p>
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