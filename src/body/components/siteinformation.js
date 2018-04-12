import React from 'react'



function SiteInformation(props){
    return(
        <div className="row">
            {
                props.information.data.map((item) => {
                    return (
                        <div className="col s12 m4" key={item.id}>
                            <div className="icon-block">
                                <h2 className="center light-blue-text">
                                    <i className="material-icons">{item.icon}</i>
                                 </h2>
                                 <h5 className="center">{item.title}</h5>
                                 <p className="light">
                                    {item.information}
                                 </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SiteInformation