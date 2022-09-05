import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvWohUg2ZoBbzywSMD7Vu-QPNH14ZRqkc",
  authDomain: "crud-assignment-44742.firebaseapp.com",
  projectId: "crud-assignment-44742",
  storageBucket: "crud-assignment-44742.appspot.com",
  messagingSenderId: "211735599754",
  appId: "1:211735599754:web:12af9f9cfc783a68466b73",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
