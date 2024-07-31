// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxe125mAR1FDxo8g9XZT3td1oJ91WvJvM",
  authDomain: "pantry-checker.firebaseapp.com",
  projectId: "pantry-checker",
  storageBucket: "pantry-checker.appspot.com",
  messagingSenderId: "813047972535",
  appId: "1:813047972535:web:46656b8c751b2d536f8332"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);