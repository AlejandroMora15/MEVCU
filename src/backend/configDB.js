// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZGhAc7xNfBtlNOQIqrIO8fpYMkzeO9_Q",
    authDomain: "mevcu-36fbd.firebaseapp.com",
    projectId: "mevcu-36fbd",
    storageBucket: "mevcu-36fbd.appspot.com",
    messagingSenderId: "682345053604",
    appId: "1:682345053604:web:5b1d31562467a48f84d531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
