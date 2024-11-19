// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKZoj3-PWR1fW_j2WLi7LyAK7Pacuu1bA",
  authDomain: "sample-auth-d85d7.firebaseapp.com",
  projectId: "sample-auth-d85d7",
  storageBucket: "sample-auth-d85d7.firebasestorage.app",
  messagingSenderId: "620304842930",
  appId: "1:620304842930:web:ff03db8aea899247a7c9ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;