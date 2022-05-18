// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/fireStore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRToeSQJC2waDFCGAuO5Z7mdLzACA3KFU",
  authDomain: "coderhouse-3bf58.firebaseapp.com",
  projectId: "coderhouse-3bf58",
  storageBucket: "coderhouse-3bf58.appspot.com",
  messagingSenderId: "260891026483",
  appId: "1:260891026483:web:17eddf87ad2fdec4236f46",
  measurementId: "G-HB2GJW0CBK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
