
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCbIf1HI12qUczVZjuN6rVhVjzbAxeabLg",
  authDomain: "gokqmp.firebaseapp.com",
  databaseURL: "https://gokqmp-default-rtdb.firebaseio.com",
  projectId: "gokqmp",
  storageBucket: "gokqmp.appspot.com",
  messagingSenderId: "36775330040",
  appId: "1:36775330040:web:0d015973f05fac945e3b0d",
  measurementId: "G-EMFTW9XS6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);