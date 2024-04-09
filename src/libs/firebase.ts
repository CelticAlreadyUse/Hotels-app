// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLR3_v5XrP4B9_CIdcJlQnskgr4ZmgRlE",
  authDomain: "hotels-management-app.firebaseapp.com",
  projectId: "hotels-management-app",
  storageBucket: "hotels-management-app.appspot.com",
  messagingSenderId: "839399010241",
  appId: "1:839399010241:web:cb53f6d2d75e35610e0940",
  measurementId: "G-B3BHQRNX24"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)