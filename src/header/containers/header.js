import React from 'react'
import Logo from '../components/logo'
import Links from '../components/links'
import './header.css'


function Header (props){
    return (
        <nav className="orange darken-1" role="navigation">
            <div className="nav-wrapper container ">
                    <Logo />
                    <ul className="right hide-on-med-and-down">
                        {
                            props.links.map((item) => {
                                return (
                                    <Links 
                                        key={item.id} 
                                        {...item} 
                                    />   
                                )
                            })
                        }
                    </ul>
                    <ul id="nav-mobile" className="side-nav">
                        {
                            props.links.map((item) => {
                                return (
                                    <Links 
                                        key={item.id} 
                                        {...item} 
                                    />   
                                )
                            })
                        }
                    </ul>
                    <a href="#" data-activates="nav-mobile" className="button-collapse">
                        <i className="material-icons">
                            menu
                        </i>
                    </a>

            </div>
        </nav>

    )
}



export default Header 