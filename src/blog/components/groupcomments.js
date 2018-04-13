import React from 'react'
import BlogData from '../../blog.json'


function GroupComments(props){
    
    const api = BlogData.blogComments
    const results = api.filter((item) => {
       return  item.idBlogarticle.includes(props.articleId)
    })
    const users = BlogData.blogUsers
    let resultuser     
    let commentId = 0
    return (
        <div className="col s12">
        {
            results.map((item) => {
                resultuser = users.filter(user => user.name == item.user)
                    return (
                        <div key={++commentId} >
                            <ul className="collection">
                                <li className="collection-item avatar" key={item.id}>
                                    <img src={resultuser[0].avatar} className="circle"/>
                                    <span className="title">{item.user}</span>
                                    <p> 
                                        {item.text} <br />
                                        <i className="small material-icons">thumb_up</i> {item.likes} 
                                        <i className="small material-icons">thumb_down</i> {item.dislikes} 
                                        <span> &nbsp; Responder </span>

                                    </p>
                                </li>
                            </ul>
                        </div>    
                )
            })
        }
        </div>
    )
}

export default GroupComments