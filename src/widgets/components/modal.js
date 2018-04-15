import React from 'react'
import './modal.css'


function Modal(props){
    let id=0
    return (
        <div className="Modal">
            <div>
                <h5 className="header center ">{props.data[0].title} </h5>
                <div className ="row center" key={++id}>
                    <div className="col s3"> </div>
                    <button className={props.data[0].icons[0].FAIcon} key={++id} onClick={() => props.handleAuth('Facebook')} >  {props.data[0].icons[0].Texto}  </button> 
                </div>
                <div className ="row center" key={++id}>
                    <div className="col s3"> </div>
                    <button className={props.data[0].icons[1].FAIcon} key={++id} onClick={() => props.handleAuth('Google')} >  {props.data[0].icons[1].Texto}  </button> 
                </div>
                <div className ="row center" key={++id}>
                    <div className="col s3"> </div>
                    <button className={props.data[0].icons[2].FAIcon} key={++id} onClick={() => props.handleAuth('Twitter')} >  {props.data[0].icons[2].Texto}  </button> 
                </div>
            </div>  
            <button className="Modal-close" onClick={props.handleClick} />
        </div>
    )
}
export default Modal