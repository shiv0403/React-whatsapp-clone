import React from "react";
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7eOJMYu3jUyCoGZFngwHEJZ27GBncnho",
  authDomain: "whatsapp-clone-9fc9a.firebaseapp.com",
  projectId: "whatsapp-clone-9fc9a",
  storageBucket: "whatsapp-clone-9fc9a.appspot.com",
  messagingSenderId: "471247328902",
  appId: "1:471247328902:web:b36df58c937d966fc9a307",
  measurementId: "G-JV00EFVC3X",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
