import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import Blog from '../pages/containers/blog'
import Portafolio from '../pages/containers/portafolio'
import About from '../pages/containers/about'
import { HashRouter, BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import data from '../functionality.json'

const home = document.getElementById('home')



render((
    <HashRouter>
        <Switch>
            <Route 
                exact path='/' 
                render={(props) => <Home {...props} data={data} />}
            />
            <Route 
                path='/blog' 
                render={(props) => <Blog {...props} data={data} />}
            />
            <Route 
                path='/portafolio' 
                render={(props) => <Portafolio {...props} data={data} />}
            />
            <Route 
                path='/aboutus' 
                render={(props) => <About {...props} data={data} />}
            />
        </Switch>
    </HashRouter>
)
,home)


