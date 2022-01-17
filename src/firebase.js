import firebase from "firebase/compat";
import "firebase/compat";
require("firebase/auth");

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCKer6hL9-WALy4QP0CExX76CMSKrEfAAI",
    authDomain: "torbogram.firebaseapp.com",
    projectId: "torbogram",
    storageBucket: "torbogram.appspot.com",
    messagingSenderId: "793197874475",
    appId: "1:793197874475:web:5621bcb1146865f12cc96e",
  })
  .auth();
