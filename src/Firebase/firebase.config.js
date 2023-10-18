// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3YIBJcc_AbQX1ljSd-r4dgEEPo9d8e9I",
  authDomain: "car-expo.firebaseapp.com",
  projectId: "car-expo",
  storageBucket: "car-expo.appspot.com",
  messagingSenderId: "709385732358",
  appId: "1:709385732358:web:0305c3a2f50acdb1321e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;