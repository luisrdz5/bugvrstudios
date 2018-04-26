import React, {Component} from 'react'
import Spinner from './spinner';
import * as firebase  from 'firebase'
import moment from 'moment'
import Comment from './comment'

class GroupComments extends  Component {
    constructor(){
        super()
        this.state = {
            comments: false,
            commentLoading: false,
        }

        let get

        this.getInformation=this.getInformation.bind(this)
    }

    componentDidMount(){
        this.setState({
            commentLoading: true,
        })
        let data  = this.getInformation();

    }
    componentWillUnmount(){
        this.setState({
            commentLoading: false,
        })
    }
    getInformation(){
        let array = []
        let users = []
        this.db = firebase.firestore();
        let data =[]
        let docRef = this.db.collection("Blog").doc("blogComments").collection("Comments")
        .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => { 
                    data.push(doc.data());             
                });
                    this.setState({
                        commentLoading: false,
                        comments: data,
                    }, () => {
                        console.log("funcion de setstate")
                    }) 
                }
            )
            console.log("Procesamos Comentarios ......")
    }
        render() {
            console.log(this.state.comments)
             if(this.state.comments){
                console.log("dentro del if ",this.state.comments)
                const api = this.state.comments
                const results = api.filter((item) => {
                    return  item.idBlogarticle.includes(this.props.articleId)
                })
                let commentId = 0
            return (
                <div className="col s12">
                {
                    results ? 
                    
                    results.map((item) => {
                            return (
                                    <Comment 
                                        key={++commentId}
                                        comment={item}
                                    />
                        )
                    })
                    :
                    <Spinner 
                        active = {this.state.commentLoading}
                    />

                }
                </div>
            )
        }
        else {
            return (<div className="col s12"> </div>)

        }
    }
}

export default GroupComments