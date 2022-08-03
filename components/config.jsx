// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9GhQw3S8fqQAW1emAVtCAk1SuU0-OdB4",
    authDomain: "wevol-9249a.firebaseapp.com",
    projectId: "wevol-9249a",
    storageBucket: "wevol-9249a.appspot.com",
    messagingSenderId: "603826976165",
    appId: "1:603826976165:web:5efa15a4030ed6b346644c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize firestore
export const db = getFirestore(app);

