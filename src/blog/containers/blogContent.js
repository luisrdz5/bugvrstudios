import React, { Component } from 'react'
import BlogArticle from '../components/blogarticle'
import BlogData from '../../blog.json'


class BlogContent extends Component{


    render () {
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
                        BlogData.blogArticules.map((item) => {
                            return(
                                <BlogArticle 
                                    key={item.id} 
                                    {...item} 
                                />
                            )
                        })
                    }
                </div>
             </div>
        )
    }

}

export default BlogContent