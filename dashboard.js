// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDJDonRsKii93yh7H3U122jMzDQzJgxHnc",
  authDomain: "demoapp-726c3.firebaseapp.com",
  databaseURL: "https://demoapp-726c3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "demoapp-726c3",
  storageBucket: "demoapp-726c3.firebasestorage.app",
  messagingSenderId: "14564664223",
  appId: "1:14564664223:web:7350a1df1557c54c4cd3aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


    function setState(state) {
      firebase.database(key).ref().set(value);
    }