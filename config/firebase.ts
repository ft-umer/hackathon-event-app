// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,fetchSignInMethodsForEmail } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3f1B8cVPQXHczP_VdYAMc0kUknppX5KY",
  authDomain: "eventplanner-d1980.firebaseapp.com",
  projectId: "eventplanner-d1980",
  storageBucket: "eventplanner-d1980.appspot.com",
  messagingSenderId: "808447932637",
  appId: "1:808447932637:web:cb70ddc9f3e347adb44334",
  measurementId: "G-T9R9VGDNM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {db,storage, auth,createUserWithEmailAndPassword, signInWithEmailAndPassword,fetchSignInMethodsForEmail, collection}