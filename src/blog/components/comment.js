import React, {Component} from 'react'
import * as firebase  from 'firebase'


class Comment extends Component{

    state = {
        user: false
    }


    componentDidMount(){
        let users
        let db = firebase.firestore();
        let docUsers = db.collection("Users").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((usersData) => {
                users.push(usersData.data())             
            })
            // this.setState({
            //     user: users
            // })
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        console.log("Procesamos Usuarios ......")

    }

    render (){
        if(this.state.user){ 
        let resultuser = this.state.user.filter(user => user.name == item.user)
        console.log("resultuser", resultuser)
        return (
            <div >
                <ul className="collection">
                    <li className="collection-item avatar" key={this.props.comment.id}>
                        <div className="row">
                            <img src={resultuser[0].avatar} className="circle"/>
                            <span className="valign-wrapper col s3">{this.props.item.user}</span>
                            <span className="valign-wrapper col s4 grey-text lighten-3"> { moment(this.props.comment.date).startOf('day').fromNow() } 
                            </span>
                        </div>
                        <p> 
                            {this.props.item.text} <br />
                            <i className="small material-icons">thumb_up</i> {this.props.comment.likes} 
                            <i className="small material-icons">thumb_down</i> {this.props.comment.dislikes} 
                            <span> &nbsp; Responder </span>
                        </p>
                    </li>
                </ul>
            </div>    
       )
        }
        else {
            return (<div className="col s12"> </div>)
        }
    }

    
}

export default Comment 