import React from 'react'
import BlogArticle from '../components/blogarticle'
import BlogData from '../../blog.json'


function BlogContent(props) {
    return (     
        <div className="container">

            {
                props.user ?
                <div className="card-panel row">
                    <div className="valign-wrapper col s6">
                        <img src={props.user.photoURL} alt="" className="circle" />
                        <span className="col s10 right"> {props.data.Bienvenida} {props.user.displayName} </span>
                    </div>
                    <div className="buttonContainer right"> 
                        <button className="btn orange darken-4" onClick={props.handleLogout} >{props.data.textoBotonCerrarSesion}</button>
                    </div>
                </div>
                :
                <div className="card-panel ">
                    <span className="blue-text text-darken-2">{props.data.etiquetaColaborar}</span>
                    <div className="buttonContainer right"> 
                        <button className="btn orange darken-4" onClick={props.handleOpenModal} >{props.data.textoBoton}</button>
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

export default BlogContent