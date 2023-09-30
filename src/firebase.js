// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore, doc, setDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpXo4X0I2kGuB7xeSEILBZXc5O4CKez6M",
  authDomain: "financely--tracker.firebaseapp.com",
  projectId: "financely--tracker",
  storageBucket: "financely--tracker.appspot.com",
  messagingSenderId: "41111177299",
  appId: "1:41111177299:web:be6d902a13733706689ea6",
  measurementId: "G-TY6FGV2LE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export {db,auth,provider,doc,setDoc} 