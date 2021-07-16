import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyD1KzaCCQjsrnbg3AzLSO8htLQ73SLPa5w",
  authDomain: "todo-list-564a4.firebaseapp.com",
  projectId: "todo-list-564a4",
  storageBucket: "todo-list-564a4.appspot.com",
  messagingSenderId: "119529183339",
  appId: "1:119529183339:web:8c612399066bb4f1df392e",
  measurementId: "G-WWRNXJ5V6C",
});

export { firebaseConfig as firebase };
