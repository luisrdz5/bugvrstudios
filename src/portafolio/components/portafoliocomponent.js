import React from 'react'

function PortafolioComponent(props){
    return (

        <div className="row col s12">
            <div className="col s6">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://firebasestorage.googleapis.com/v0/b/bugvrstudio.appspot.com/o/laberinto.png?alt=media&token=6b3650df-be92-464b-9f76-15edd60e490d" />
                    </div>
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Video Juego Laberinto VR<i className="material-icons right">more_vert</i></span>
                    <p><a href="https://github.com/luisrdz5/laberintoVR" target="_blank" >Ver Codigo en Github</a></p>
                    <p><a href="https://laberinto-vr.firebaseapp.com/" target="_blank" >Ver Demo</a></p>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Laberinto VR<i className="material-icons right">close</i></span>
                    <p>Es un ejemplo de laberinto desarrollado para VR totalmente con tecnologia Web</p>
                    </div>
                </div>
            </div>
            <div className="col s6">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://firebasestorage.googleapis.com/v0/b/bugvrstudio.appspot.com/o/bugvideo.png?alt=media&token=1c0c5824-4500-44c9-9855-3b5dc5e891ba" />
                    </div>
                    <div className="card-content">
                    <span className="card-title  activator grey-text text-darken-4">Bug Video<i className=" material-icons right">more_vert</i></span>
                    <p><a href="https://github.com/luisrdz5/bugvideo" target="_blank" >Ver Codigo en Github</a></p>
                    <p><a href="https://bugvideo-7e32e.firebaseapp.com/" target="_blank" >Ver Demo</a></p>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Bug Video<i className="material-icons right">close</i></span>
                    <p>Sitio web desarrollado en React con Redux en el cual se pueden visualizar videos por categorias y a su vez se pueden realizar busquedas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortafolioComponent