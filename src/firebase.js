// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPZI5LFF1fAHuKqxQRdON0fkYnwXo3OPk",
  authDomain: "review-app-4e57b.firebaseapp.com",
  projectId: "review-app-4e57b",
  storageBucket: "review-app-4e57b.appspot.com",
  messagingSenderId: "1014673186676",
  appId: "1:1014673186676:web:63d938668928e6142f5621",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
