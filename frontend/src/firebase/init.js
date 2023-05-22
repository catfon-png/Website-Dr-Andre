// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtrIItn1GjyVpZUk_y0HqFAa8lT8SnC8o",
  authDomain: "dr-andre-c1bba.firebaseapp.com",
  projectId: "dr-andre-c1bba",
  storageBucket: "dr-andre-c1bba.appspot.com",
  messagingSenderId: "399449447614",
  appId: "1:399449447614:web:b62c5983bc5af3fc1092ef",
  measurementId: "G-4T1M5CG1FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)