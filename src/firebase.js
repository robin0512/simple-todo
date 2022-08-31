// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2in1D7TO6Gt-UgsHbd-u3vGcTY-7UmG4",
  authDomain: "simple-todo-7ca3c.firebaseapp.com",
  projectId: "simple-todo-7ca3c",
  storageBucket: "simple-todo-7ca3c.appspot.com",
  messagingSenderId: "368048325307",
  appId: "1:368048325307:web:0ebd9864b9d0fc8464df9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)