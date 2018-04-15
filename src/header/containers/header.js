import React from 'react'
import Logo from '../components/logo'
import Links from '../components/links'
import LinksBurgerMenu from '../components/linksburgermenu'
import './header.css'
import { slide as Menu } from 'react-burger-menu'




function Header (props){
    let links
    let id = 0
    return (
        <nav className="orange darken-1" role="navigation">
            <div className="hide-on-large-only">
                <Menu 
                    width={ 280 }
                    burgerBarClassName={ "blue-grey darken-3 hide-on-large-only valign-wrapper" } 
                    crossButtonClassName={ "blue-grey darken-3" } 
                    menuClassName={ "blue-grey darken-3" } 
                    morphShapeClassName={ "blue-grey darken-3" } 
                    itemListClassName={ "blue-grey darken-3 waves-effect" } 
                >
                                {
                                    props.links.map((item) => {
                                        return (
                                            <LinksBurgerMenu 
                                                key={item.id} 
                                                {...item}
                                                className="blue-grey darken-3 bm-item-list" 
                                            />   
                                        )
                                    })
                                }

                </Menu>
            </div>
                <div className="nav-wrapper container ">
                        <Logo />
                        <ul className="right hide-on-med-and-down">
                            {
                                props.links.map((item) => {
                                    return (
                                        <li key={++id}>
                                            <Links 
                                            key={item.id} 
                                            {...item} 
                                            />
                                        </li>   
                                    )
                                })
                            }
                        </ul>


                </div>
        </nav>

    )
}



export default Header 

                    {/* <ul id="nav-mobile" className="side-nav">
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
                    </a> */}