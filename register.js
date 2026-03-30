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

// SIGN UP
const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const IDU = document.getElementById("uid").value;
  const age = document.getElementById("age").value;
  const dob = document.getElementById("DOB").value;
  const mobnum = document.getElementById("MobNum").value;
  const city = document.getElementById("city").value;


  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        IDU: IDU,
        age: age,
        DOB: dob,
        MobileNumber: mobnum,
        City: city
      };

      alert('Account created Successfully');
      const docRef = doc(db, "users", user.uid);
      return setDoc(docRef, userData);
    })
    .then(() => {
      window.location.href = 'login.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        alert("Email already in use");
      } else {
        alert('Unable to create account: ' + error.message);
      }
    });
});

// SIGN IN
const signIn = document.getElementById('ssubmit');
signIn.addEventListener("click", (event) => {
  event.preventDefault();

  const semail = document.getElementById('semail').value.trim().toLowerCase();
  const spassword = document.getElementById('spassword').value;

  signInWithEmailAndPassword(auth, semail, spassword)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('Login successful: ' + user.uid);
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      console.error("Login error:", error); // Log full error

      const errorCode = error.code;
      if (errorCode === 'auth/user-not-found') {
        alert("User does not exist.");
      } else if (errorCode === 'auth/wrong-password') {
        alert("Incorrect password.");
      } else if (errorCode === 'auth/invalid-email') {
        alert("Invalid email format.");
      } else {
        alert("Login failed: " + error.message);
      }
    });
});
