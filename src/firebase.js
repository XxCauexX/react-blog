// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = ({
  apiKey: "AIzaSyCCEbebH8mzmkdQGvvoWZcY8vxwm6imiO4",
  authDomain: "blog-9c43a.firebaseapp.com",
  projectId: "blog-9c43a",
  storageBucket: "blog-9c43a.appspot.com",
  messagingSenderId: "718778583886",
  appId: "1:718778583886:web:39980be43552bf3a6eac1f",
  measurementId: "G-RZYFN0YPBZ"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {db};