import React from 'react'
import { Link } from 'react-router-dom'

function LinksBurgerMenu(props){
    let id = 0
    return (
         <Link to={props.link}  className= {props.className} key={++id} ><span>{props.description}</span> <br /> </Link>    
    )
}
export default LinksBurgerMenu