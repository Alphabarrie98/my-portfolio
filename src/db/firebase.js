// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvf0BT_MndBTe6EChURFbRIKv92gUWJyc",
  authDomain: "alpha-barrie.firebaseapp.com",
  projectId: "alpha-barrie",
  storageBucket: "alpha-barrie.appspot.com",
  messagingSenderId: "213638045821",
  appId: "1:213638045821:web:564fc3ffffc2f664a39114",
  measurementId: "G-1WJEGLHTPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FirebaseDB = getFirestore(app);