import React from 'react'

function Links(props){
    return (
                <li> <a href={props.link} >{props.description} </a> </li>     
    )
}
export default Links