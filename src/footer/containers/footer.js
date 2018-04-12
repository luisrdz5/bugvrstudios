import React from 'react'
import SiteInfo from '../components/siteinfo'
import FastAccessLinks from  '../components/fastaccesslinks'
import SocialNetworks from '../components/socialnetworks'
function Footer(props){
    return (
        <div className="page-footer orange">
            <div className="row container">
                <SiteInfo siteInfo={props.data.siteInfo[0]} />
                <div className="col l3 s12">
                    <ul>
                        {
                            props.data.fastAccessLinks.map((item) => {
                                    return(
                                        <FastAccessLinks 
                                            key={item.id}
                                            {...item}
                                        />
                                    )
                            })
                        }
                    </ul>
                </div>
                <div className="col l3 s12">
                    <h5 className="white-text">{props.data.socialNetworks[0].title}</h5>
                    <ul>
                        {
                            props.data.socialNetworks[0].networks.map((item) => {
                                    return(
                                        <SocialNetworks 
                                            key={item.id}
                                            {...item}
                                        />
                                    )
                            })
                        }
                    </ul>
                </div> 
            </div>
        </div>
    )
}


export default Footer