import React, {Component} from 'react'
import Spinner from './spinner';
import * as firebase  from 'firebase'
import moment from 'moment'


class GroupComments extends  Component {

    state = {
        comments: {},
        commentLoading: true,
        users: false
    }

    componentDidMount(){
        this.setState({
            commentLoaded: true
        })

        let db = firebase.firestore();
        let data =[]
        let docRef = db.collection("Blog").doc("blogComments").collection("Comments")
        .get()
        .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log("insertando",doc.id, " => ", doc.data());   
                    data.push(doc.data());             
                });
                this.setState({
                    commentLoading: false,
                    comments: data
                }) 
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });

            let array = []
            let users = []
            let docUsers = db.collection("Users")
            .get()
            .then((querySnapshotUsers) => {
                querySnapshotUsers.forEach((usersData) => {
                        users.push(usersData.data());             
                    });
                    this.setState({
                        users:users
                    })
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
            console.log("Procesamos Usuarios ......")
    }
        render() {
            let hoy = Date.now() 
            let fecha2 = moment(hoy);


             if(!this.state.commentLoading && this.state.users){
                const api = this.state.comments
                const results = api.filter((item) => {
                    return  item.idBlogarticle.includes(this.props.articleId)
                })
                const users = this.state.users
                let resultuser     
                let commentId = 0
            return (
                <div className="col s12">
                {
                    results ? 
                    
                    results.map((item) => {
                        resultuser = users.filter(user => user.name == item.user)
                            return (
                                <div key={++commentId} >
                                    <ul className="collection">
                                        <li className="collection-item avatar" key={item.id}>
                                            <div className="row">
                                                <img src={resultuser[0].avatar} className="circle"/>
                                                <span className="valign-wrapper col s3">{item.user}</span>
                                                <span className="valign-wrapper col s4 grey-text lighten-3"> { moment(item.date).startOf('day').fromNow() } 
                                                </span>
                                                
                                            </div>
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