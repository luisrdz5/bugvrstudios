import React from 'react'
import GroupComments from '../components/groupcomments'


function BlogArticle(props){
    let commentId = 0

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
                    />
                </div>
            </div>
      </div>
    )
}

export default BlogArticle