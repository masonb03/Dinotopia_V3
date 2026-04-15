// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsqOwncpDR1QZTngDZsE9ainSvSWRlhGc",
  authDomain: "dinotopia-b4a31.firebaseapp.com",
  projectId: "dinotopia-b4a31",
  storageBucket: "dinotopia-b4a31.firebasestorage.app",
  messagingSenderId: "957424972810",
  appId: "1:957424972810:web:e037bb859b97fc2983dbf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);