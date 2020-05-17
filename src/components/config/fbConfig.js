import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC5IJo5LukHjqSca_wQA-ayKEMvRUU9mE0",
    authDomain: "mentorsys-3359b.firebaseapp.com",
    databaseURL: "https://mentorsys-3359b.firebaseio.com",
    projectId: "mentorsys-3359b",
    storageBucket: "mentorsys-3359b.appspot.com",
    messagingSenderId: "429894287665",
    appId: "1:429894287665:web:a7c44db5d9f99ca5133010",
    measurementId: "G-T5GFRQBFPV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
