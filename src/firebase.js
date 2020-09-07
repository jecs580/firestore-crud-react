// Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyB1fYor-PL6hYA20eUbvcMF2UUEL7TGpOU",
    authDomain: "firestore-crud-react-93f75.firebaseapp.com",
    databaseURL: "https://firestore-crud-react-93f75.firebaseio.com",
    projectId: "firestore-crud-react-93f75",
    storageBucket: "firestore-crud-react-93f75.appspot.com",
    messagingSenderId: "310063248722",
    appId: "1:310063248722:web:f17c1515b4229f0f0df68b"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();