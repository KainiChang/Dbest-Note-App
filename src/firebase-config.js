
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBkDeACOipLMOk9W7sWZGD0bBjM-LtN0Oo",
    authDomain: "dbest-note-app-1bc4e.firebaseapp.com",
    projectId: "dbest-note-app-1bc4e",
    storageBucket: "dbest-note-app-1bc4e.appspot.com",
    messagingSenderId: "755138489819",
    appId: "1:755138489819:web:50bb012a30c1f85c904bfe"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth();
