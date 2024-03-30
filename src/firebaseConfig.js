// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAoXIrzJe2qvLx8jQUHuazO3PuKXm6Qvc0",
  authDomain: "test-614f8.firebaseapp.com",
  projectId: "test-614f8",
  storageBucket: "test-614f8.appspot.com",
  messagingSenderId: "122562034737",
  appId: "1:122562034737:web:df037951445bbc18b5a910",
  measurementId: "G-GEKKN644Y1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);

 const provider =  new GoogleAuthProvider();

export {auth, provider}