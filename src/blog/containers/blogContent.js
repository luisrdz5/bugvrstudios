import React from 'react'
import BlogArticle from '../components/blogarticle'
import BlogData from '../../blog.json'


function BlogContent(props) {
    return (     
        <div className="container">
            <div className="card-panel ">
                <span className="blue-text text-darken-2">{props.data.etiquetaColaborar}</span>
                <div className="buttonContainer right"> 
                    <button className="btn orange darken-4">{props.data.textoBoton}</button>
                </div>
            </div>
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