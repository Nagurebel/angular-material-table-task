const admin = require('firebase-admin');
var serviceAccount = require("../config/firebase-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://demoApi.firebaseio.com"
});

const DB = admin.firestore();


let getuserdata = async (req, res, next) => {

    try {
        let snpashot = await DB.collection("usersdetails").get();
        let list = snpashot.docs.map(doc => doc.data())
            res.status(200).send(list)
    } catch (error) {
        console.log("Failed to read data:", error);
        next(error)
    }
}

let setunicuser = async (req, res, next) => {
let userName = req.query.name;
let {name, age,score } = req.body;
    try {
        await DB.collection("winner").doc(userName).set({
            name:name,
            age:age,
            score:score,
          })
          res.send({msg:"successfully added"})
    } catch (error) {
        next(error)
    }
}

let createusers = async (req, res, next) =>{
    let {name, age,score } = req.body;
    let docname = req.body.name;
    await DB.collection("usersdetails").doc(docname).set({
      name:name,
      age:age,
      score:score,
    })
    .then((resp) => {
        console.log("Document successfully written!",resp);
        res.send({msg:"successfully added"})
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

let getwinner = async (req, res, next) => {
    try {
        let snpashot = await DB.collection("winner").get();
        let list = snpashot.docs.map(doc => doc.data())
            res.status(200).send(list)
    } catch (error) {
        console.log("Failed to read data:", error);
        next(error)
    }
}

module.exports = {
    getuserdata,
    createusers,
    setunicuser,
    getwinner
}