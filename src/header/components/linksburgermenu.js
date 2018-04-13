import React from 'react'
import { Link } from 'react-router-dom'

function LinksBurgerMenu(props){
    return (
         <Link to={props.link}  className= {props.className} ><span>{props.description}</span> <br /> </Link>    
    )
}
export default LinksBurgerMenu