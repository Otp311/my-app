// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK5U0_SRf8Zbo10pzmrf316NM2B7pPz2U",
  authDomain: "coffeeshop-49afd.firebaseapp.com",
  projectId: "coffeeshop-49afd",
  storageBucket: "coffeeshop-49afd.appspot.com",
  messagingSenderId: "165023063995",
  appId: "1:165023063995:web:e7ceb9cba8c344f559ae9e",
  measurementId: "G-L9H2WEV8D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };