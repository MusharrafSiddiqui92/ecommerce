// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8BpPcW27kp3YeJkWCprXMMgy641DizXY",
  authDomain: "ecommerce-37294.firebaseapp.com",
  projectId: "ecommerce-37294",
  storageBucket: "ecommerce-37294.firebasestorage.app",
  messagingSenderId: "525620601602",
  appId: "1:525620601602:web:9b4c5b3f0605467108981b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
