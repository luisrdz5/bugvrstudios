import React from 'react'
import Team from '../components/team'

function About(props) {
    return (
        <div className="container">
            <div className="col s12 m7">
                <h2 className="header">{props.data.Header}</h2>
                {
                    <Team 
                        team={props.team}
                        redes={props.team.redes}
                    />
                }
            </div>
        </div>
    )
}


export default About
 
