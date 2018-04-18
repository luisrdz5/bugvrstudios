import React from 'react'

function Spinner (props) {
    if (!props.active){
        return null
    }
    return (
            <div className="center">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper ">
                        <div className="circle"></div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Spinner