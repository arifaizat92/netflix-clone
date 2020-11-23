import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//we need to somehow seed the database

//we need a config here
const config = {
    apiKey: "AIzaSyAahPqLbLeqaaHyGUMIKaB1ZdHgv5alPQc",
    authDomain: "netflix-clone-acb4e.firebaseapp.com",
    databaseURL: "https://netflix-clone-acb4e.firebaseio.com",
    projectId: "netflix-clone-acb4e",
    storageBucket: "netflix-clone-acb4e.appspot.com",
    messagingSenderId: "402392647867",
    appId: "1:402392647867:web:11675a788a9b2785bfc19e"
};

//initialize Firebase
const firebase = Firebase.initializeApp(config);


export { firebase };