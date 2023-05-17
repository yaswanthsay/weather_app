import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCcX9pqmgU_q_sL6KNq979Y_WXIcpmXafQ",
  authDomain: "weather-app-31476.firebaseapp.com",
  projectId: "weather-app-31476",
  storageBucket: "weather-app-31476.appspot.com",
  messagingSenderId: "632427141814",
  appId: "1:632427141814:web:847584d1623cd6d7c9a417",
  measurementId: "G-FEFNMZGL8C"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)