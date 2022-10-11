
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyANdb8v_cCo7qOW-m76uuP2ooItPRSGRY0",

  authDomain: "chat-402bd.firebaseapp.com",

  projectId: "chat-402bd",

  storageBucket: "chat-402bd.appspot.com",

  messagingSenderId: "1010307513471",

  appId: "1:1010307513471:web:4269403aad4d5c7e4b934a"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();