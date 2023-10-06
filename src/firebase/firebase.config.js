// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcl5nDpE57KugZGZjMJY53_8rD0xnqmOQ",
  authDomain: "entertainment-fiesta.firebaseapp.com",
  projectId: "entertainment-fiesta",
  storageBucket: "entertainment-fiesta.appspot.com",
  messagingSenderId: "324282880858",
  appId: "1:324282880858:web:ed4f0b4d428d21ffc91963",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
