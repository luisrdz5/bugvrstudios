import React from 'react'
import logo from '../../../images/bugvrlogo.png'
import './logo.css'


function Logo(props){
    return (
        <a href="/" className="brand-logo">
            <img src={logo} className="App-logo" alt="logo" /> 
        </a>
    )
}
export default Logo