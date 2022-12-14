// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVS_6ZkZSxaIvK8Ln3UuXLtuqXOjA_NPA",
  authDomain: "quasar-fcm-testing.firebaseapp.com",
  projectId: "quasar-fcm-testing",
  storageBucket: "quasar-fcm-testing.appspot.com",
  messagingSenderId: "268463883056",
  appId: "1:268463883056:web:4d23153be1f7dc5e773ef5",
  measurementId: "G-JDWFH6FPL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
