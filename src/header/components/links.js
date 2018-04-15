import React from 'react'
import { Link } from 'react-router-dom'

function Links(props){

    return (
         <Link to={props.link}  className= {props.className}  >{props.description} </Link>    
    )
}
export default Links