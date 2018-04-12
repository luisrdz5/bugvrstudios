import React from 'react'

function FastAccessLinks(props){
    return (
        <li> 
            <a className="white-text" href={props.link}>  {props.title}</a>
        </li>
    )
}
export default FastAccessLinks