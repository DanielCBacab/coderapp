import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
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
export const db = getFirestore(app);
const analytics = getAnalytics(app);
