import React from 'react'
import GroupComments from '../components/groupcomments'


function BlogArticle(props){
    let commentId = 0
    //console.log("props llega a blogarticle asi:",props)
    return (
        <div className="card">
            <span className="card-title">{props.title}</span>
            <div className="card-image">
                <img src={props.picture} />
            </div>
            <div className="card-content">
                <p>{props.body}</p>
            </div>
            <div className="card-action">
                <div>
                    <GroupComments 
                        key={++commentId} 
                        {...props}
                        obtainComments={props.obtainComments}
                    />
                </div>
            </div>
      </div>
    )
}

export default BlogArticle