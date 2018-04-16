const admin = require('../node_modules/firebase-admin');
const serviceAccount = require("./bugvrstudios-key.json");

let data = require("./blogArticles.json");
let comments = require("./blogComments.json");
let languages = require("./blogLanguages.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://bugvrstudio.firebaseio.com"
});

    admin.firestore()
    .collection('Blog').doc('blogArticules')
    .set(data)
    .then((res) => {
        console.log("Se han insertado los Articulor!");
        //console.log(nestedContent)
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

// se insertan los comentarios

    admin.firestore()
    .collection('Blog').doc('blogComments')
    .set(comments)
    .then((res) => {
        console.log("Se han insertado los comentarios !");
        //console.log(nestedContent)
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

    //se insertan los languages
    admin.firestore()
    .collection('Blog').doc('blogLanguages')
    .set(languages)
    .then((res) => {
        console.log("Se han insertado los idiomas !");
        //console.log(nestedContent)
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });




















