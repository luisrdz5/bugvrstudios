import React from 'react'
import SiteInformation from '../components/siteinformation'


function Body(props) {

    return (
        <div className="container">
            <SiteInformation information={props} />
        </div>
    )
}

export default Body