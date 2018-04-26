import React from 'react'
import './team.css'


function obtenerRedes(data){
    let arr = []
    for(let x in data){
        arr.push(data[x])
    }
    console.log("Dentro de la funcion:",arr)
    return(arr)
}

function Team(props) {
   let i = 0

    return(
        <div className="card horizontal col s12">
            <div className="row col s12 ">
                <div className="col s3 center ">
                    <img  className="imagen" src={props.team.avatar} />
                </div>
                <div className="col s9 left-align valign-wrapper">
                    <div className="row col s12">
                        <p>
                            <span><b>{props.team.TextoPuesto} </b> </span>
                            <span>{props.team.Puesto}</span>
                            <br/>
                        </p>
                    </div>
                </div>
                <div className="row col s9">
                        <p>
                            {props.team.Bio}
                        </p>
                    </div>
                <div className="card-action col s12 center-align">
                    <h6> { props.team.segundoEncabezado } </h6>
                        {
                           props.team.redes.map((item) => {
                               return( <a href={item.link} className={item.classIcon} key={++i} target="_blank"> {item.text}</a>)
                            })
                        }
                </div>
            </div>
        </div>
    )
}
export default Team