import React from 'react'

function SiteInfo(props){
    return (
        <div className="col l6 s12">
            <h5 className="white-text">{props.siteInfo.title}</h5>
            <p className="grey-text text-lighten-4">
                {props.siteInfo.info}
            </p>
        </div>
    )
}

export default SiteInfo