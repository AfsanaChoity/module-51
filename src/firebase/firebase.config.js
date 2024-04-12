// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_eO1baBfE-dAMg_Fsy_gqEq-HvNAvczA",
  authDomain: "module-51-c5b13.firebaseapp.com",
  projectId: "module-51-c5b13",
  storageBucket: "module-51-c5b13.appspot.com",
  messagingSenderId: "255658659743",
  appId: "1:255658659743:web:ec18e9c46fd784397237aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;