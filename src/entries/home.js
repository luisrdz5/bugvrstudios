import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import { HashRouter, BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import * as firebase  from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyDQzs4ohwJNWr2vjePVtuphsi5sgSuNiNo",
    authDomain: "bugvrstudio.firebaseapp.com",
    databaseURL: "https://bugvrstudio.firebaseio.com",
    projectId: "bugvrstudio",
    storageBucket: "bugvrstudio.appspot.com",
    messagingSenderId: "621054045661"
  };
  firebase.initializeApp(config);


// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
let data 
var docRef = db.collection("Functionality").doc('Esp')
docRef.get()
    .then(function(doc) {
                data = doc.data()
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
                                render={(props) => <Home {...props} data={data} Type={'Blog'} />}
                            />
                            <Route 
                                path='/portafolio' 
                                render={(props) => <Home {...props} data={data} Type={'Portafolio'} />}
                            />
                            <Route 
                                path='/aboutus' 
                                render={(props) => <Home {...props} data={data} Type={'About'}/>}
                            />
                        </Switch>
                    </HashRouter>
                )
                ,home)


}).catch(function(error) {
    console.log("Error getting document:", error);
});