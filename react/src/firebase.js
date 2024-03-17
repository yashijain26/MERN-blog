// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e091d.firebaseapp.com",
  projectId: "mern-blog-e091d",
  storageBucket: "mern-blog-e091d.appspot.com",
  messagingSenderId: "434974803686",
  appId: "1:434974803686:web:af50a490d2a97b1f8c5d27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);