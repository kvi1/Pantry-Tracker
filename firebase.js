// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeQR_MRtRNVash39l1d_c_bzDW-IecpFo",
  authDomain: "inventory-management-db084.firebaseapp.com",
  projectId: "inventory-management-db084",
  storageBucket: "inventory-management-db084.appspot.com",
  messagingSenderId: "1083556311829",
  appId: "1:1083556311829:web:76b458e4c7a73855b66f1c",
  measurementId: "G-9HREB309B8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Conditionally initialize Firebase Analytics
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

const firestore = getFirestore(app);
export { firestore };


