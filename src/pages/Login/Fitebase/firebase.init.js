// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebaseConfig from "./firebase.config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvgb-2aVT9pjkSAdlctX1MOZB_6VD_6wk",
  authDomain: "photography-client-e1940.firebaseapp.com",
  projectId: "photography-client-e1940",
  storageBucket: "photography-client-e1940.appspot.com",
  messagingSenderId: "103224010050",
  appId: "1:103224010050:web:8aff20d094997573ef14db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;