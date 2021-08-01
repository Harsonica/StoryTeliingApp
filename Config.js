import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC_ygsV0LsEx5aCGdcaM7V1BpZsrDLPtsk",
    authDomain: "class-87.firebaseapp.com",
    databaseURL: "https://class-87-default-rtdb.firebaseio.com",
    projectId: "class-87",
    storageBucket: "class-87.appspot.com",
    messagingSenderId: "601893416600",
    appId: "1:601893416600:web:75a0b8da6647b60006eaed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()