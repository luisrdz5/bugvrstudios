const admin = require('../node_modules/firebase-admin');
const serviceAccount = require("./bugvrstudios-key.json");

const data = require("./functionality.json");




admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://bugvrstudio.firebaseio.com"
});

data && Object.keys(data).forEach(key => {
    const nestedContent = data[key];

    if (typeof nestedContent === "object") {
        Object.keys(nestedContent).forEach(docTitle => {
            admin.firestore()
            //This is for Spanish functionality  collection('Functionality').doc('Esp')
                .collection('Functionality').doc('Esp')
                .set(data)
                .then((res) => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        });
    }
});