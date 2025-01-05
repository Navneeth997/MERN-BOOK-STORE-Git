// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPYDcrSqjpbXriUIg-JX0zvhUNW1Gd478",
  authDomain: "mern-book-invntory.firebaseapp.com",
  projectId: "mern-book-invntory",
  storageBucket: "mern-book-invntory.firebasestorage.app",
  messagingSenderId: "11842029889",
  appId: "1:11842029889:web:5e2839f3ccd6099936b9c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;