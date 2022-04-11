import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";
import "firebase/auth";
import "firebase/messaging";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD54soWZyFFaE8ZVIXEKAaB5jGpQh1W5vE",
  authDomain: "messianfox.firebaseapp.com",
  projectId: "messianfox",
  storageBucket: "messianfox.appspot.com",
  messagingSenderId: "912565391198",
  appId: "1:912565391198:web:198c40fd04cac9b35d89cf",
  measurementId: "G-V3XXCJZTNL"
};

// Initialize Firebase


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


let storage = firebase.storage();
let database = firebase.database();
let auth = firebase.auth();
let firestore = firebase.firestore();
// Authentication for Google
var googleProvider = new firebase.auth.GoogleAuthProvider();
// Authentication for Facebook
var facebookProvider = new firebase.auth.FacebookAuthProvider();
// Authentication for Twitter
var twitterProvider = new firebase.auth.TwitterAuthProvider();
export {
  firestore,
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
  database,
  storage,
  firebase as default,
};