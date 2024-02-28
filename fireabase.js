// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFz3nGq7Er6adEzsrZ2bLrNuHNtr0FwEA",
  authDomain: "refokus-4f136.firebaseapp.com",
  projectId: "refokus-4f136",
  storageBucket: "refokus-4f136.appspot.com",
  messagingSenderId: "899321197278",
  appId: "1:899321197278:web:64eb4029e7c071ae4e484f",
  measurementId: "G-Q28M9NWNXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);