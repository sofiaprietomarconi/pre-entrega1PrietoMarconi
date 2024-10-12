
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_SECRET,
  authDomain: import.meta.env.VITE_DOMAIN,
  projectId: import.meta.env.VITE_ID,
  storageBucket: import.meta.env.VITE_SENDER_ID,
  messagingSenderId: import.meta.env.VITE_MESS,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_IDD
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

