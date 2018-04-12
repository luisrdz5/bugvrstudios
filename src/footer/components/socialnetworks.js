import React from 'react'

function SocialNetworks(props){
    return (
        <li> 
            <a className="white-text" href={props.link} target="_blank">
                <i className={props.classIcon} >
                </i>  
                &nbsp;{props.text}
            </a>
        </li>
    )
}


export default SocialNetworks
