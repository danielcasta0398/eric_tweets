// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1RN_yHvhlEd_UpD0TGx73HfsthdnkQOc",
  authDomain: "eric-tweets.firebaseapp.com",
  projectId: "eric-tweets",
  storageBucket: "eric-tweets.appspot.com",
  messagingSenderId: "880994698805",
  appId: "1:880994698805:web:5e8b9c819d61bc6fa3537c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
