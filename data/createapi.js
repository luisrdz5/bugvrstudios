import React from 'react'
import * as firebase from 'firebase'



function CreateApi(){
    // Initialize Cloud Firestore through Firebase

    var db = firebase.firestore();
    db.collection("links").add({
        "id": "1",
        "description": "Inicio",
        "link": "/"
      },
      {
        "id": "2",
        "description": "Blog",
        "link": "/blog"
      },
      {
        "id": "3",
        "description": "Portafolio",
        "link": "/portafolio"
      },
      {
        "id": "4",
        "description": "Acerca de Nosotros",
        "link": "/aboutus"
      })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        })
    .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    db.collection("siteInfo").add(
        {
            "id": "1",
            "title":"BugVRStudios",
            "info":" Somos un grupo de profesionales entusiastas especialistas en Realidad Virtual, Realidad aumentada y Realidad Mixta."
        }
    )
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        })
    .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    db.collection("fastAccessLinks").add(
        {
            "id":"1",
            "title":"Desarrollo de Experiencias",
            "link":"/"
          },
          {
            "id":"2",
            "title":"Contactanos",
            "link":"/"
          },
          {
            "id":"3",
            "title":"Privacidad",
            "link":"/"
          }
    )
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        })
    .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    db.collection("socialNetworks").add(
        {
            "id":"1",
            "title":"Redes Sociales"
        }
    )    
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        })
    .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    db.collection("socialNetworks/networks").add(
        {
            "id":"1",
            "link":"https://www.facebook.com/Bugvrstudios-1883871325207863/",
            "text":"Bugvrstudios",
            "classIcon": "fa fa-facebook-official fa-3"
          },
          {
            "id":"2",
            "link":"https://www.youtube.com/channel/UCAMQ_U-QdmoNIJdt9vSExUQ",
            "text":"Bugvrstudios",
            "classIcon": "fa fa-youtube-play fa-3"
          },
          {
            "id":"3",
            "link":"https://twitter.com/bugvrstudios",
            "text":"@bugvrstudios",
            "classIcon": "fa fa-twitter fa-3"
          },
          {
            "id":"4",
            "link":"https://www.instagram.com/bugvrstudios/",
            "text":"bugvrstudios",
            "classIcon": "fa fa-instagram fa-3"
          }  
    )  
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        })
    .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    db.collection("siteInformation").add(
        {
            "id":"1",
            "icon":"3d_rotation",
            "title": "Realidad Virtual",
            "information": "Es cuando la persona tiene una inmersión en un entorno de Escenas y objetos de aparencia real que son generados por Tecnologia."
        },
        {
            "id":"2",
            "icon":"smartphone",
            "title": "Realidad Aumentada",
            "information": "Es la visualización de un entorno real a travez de un dispositivo tecnologico (Actualmente Smartphones) en el cual se monta una realidad visual generada por la tecnologia. "
        },
        {
            "id":"3",
            "icon":"visibility",
            "title": "Realidad Mixta",
            "information": "Es la combinación de Realidad Virtual y Realidad Aumentada. Por medio de dispositivos se tiene la sensación de estar en el mundo real interactuando con objetos o personas generadas por tecnologia."
        }
    )  
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        })
    .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    db.collection("etiquetasBlog").add(
        {
            "id":"1",
            "etiquetaColaborar":"¿Deseas Comentar con Nosotros?",
            "textoBoton": "Acceder",
            "Bienvenida":"Bienvenido",
            "textoBotonCerrarSesion":"Cerrar Sesión"
        }
    )  
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        })
    .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    db.collection("buttonsSocialNetworks").add(
        {
            "title": "Por Favor Selecciona una opción:"
        }
    )  
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        })
    .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    db.collection("buttonsSocialNetworks/icons").add(
        {
            "id": 1,
            "Texto": "Login con Facebook",
            "FAIcon":"loginBtn loginBtn--facebook col s6 center",
            "Type": "Facebook"
          },
          {
            "id": 2,
            "Texto": "Login con Google",
            "FAIcon":"loginBtn loginBtn--google col s6 center",
            "Type": "Google"
          },
          {
            "id": 3,
            "Texto": "Login con Twitter",
            "FAIcon":"loginBtn loginBtn--twitter col s6 center",
            "Type": "Twitter"
          },
          {
            "id": 4,
            "Texto": "Login con Correo Electronico",
            "FAIcon":"loginBtn loginBtn--email col s6 center",
            "Type": "Email"
          }
    )
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        })
    .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}
export default CreateApi