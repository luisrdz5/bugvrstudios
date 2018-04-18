import React, { Component } from 'react'
import BlogArticle from '../components/blogarticle'
//import BlogData from '../../blog.json'
import Spinner from '../components/spinner'
import * as firebase  from 'firebase'

class BlogContent extends Component{
    state = {
        loading: false,
        BlogData: [],
        language: 'ESP',
    }
    componentDidMount(){
        this.setState({
            loading: true
        })

        var db = firebase.firestore();
        let data 
        var docRef = db.collection("Blog").doc("blogArticules")

        docRef.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    loading: false,
                    BlogData: doc.data()
                })
            } else {
                // doc.data() will be undefined in this case
                console.log("No existe ningun Registro!");
            }
        }).catch(function(error) {
            console.log("Error al tratar de obtener los datos:", error);
        });
    }

    obtainArticles(data){
        let arr = []
        //let arr2 = []
        //let arr3 = []
        let i=0
        //obtengo el id del articulo 
        //console.log("el data trae:", data)

        if (this.state.language == "ESP"){
            for(let x in data){
                data[x].ESP.articleId = data[x].articleId
                arr.push(data[x].ESP)
                //arr.push(data[i].articleId)
            }
        }
        if (this.state.language == "EN"){
            for(let x in data){
            data[x].EN.articleId = data[x].articleId
            arr.push(data[x].EN);
            }
        }
        //arr.push(article)
        return arr
    }
    render () {
        let llave =0
        return (
            <div className="container">
                {
                    this.props.user ?
                    <div className="card-panel row">
                        <div className="valign-wrapper col s6">
                            <img src={this.props.user.photoURL} alt="" className="circle"  width="50" />
                            <span className="col s10 right"> {this.props.data.Bienvenida} {this.props.user.displayName} </span>
                        </div>
                        <div className="buttonContainer right"> 
                            <button className="btn orange darken-4" onClick={this.props.handleLogout} >{this.props.data.textoBotonCerrarSesion}</button>
                        </div>
                    </div>
                    :
                    <div className="card-panel ">
                        <span className="blue-text text-darken-2">{this.props.data.etiquetaColaborar}</span>
                        <div className="buttonContainer right"> 
                            <button className="btn orange darken-4" onClick={this.props.handleOpenModal} >{this.props.data.textoBoton}</button>
                        </div>
                    </div>
                }
                <div>
                    {
                        this.state.BlogData.blogArticles ?
                        this.obtainArticles(this.state.BlogData.blogArticles).map((item) => {
                            return(
                                <BlogArticle 
                                    key={++llave}  
                                    {...item} 
                                />
                            )
                        })
                        :
                        <Spinner
                        
                        active = {this.state.loading}
                        />   
                    }
                </div>
             </div>
        )
    }
}

export default BlogContent