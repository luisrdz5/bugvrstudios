import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import data from '../functionality.json'


const home = document.getElementById('home')

render( 
    <Home data={data} />
,home)