// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjTmLeP4CpvZqt8sydXOvXyT5YcnMEm6M",
  authDomain: "stayconnect-auth.firebaseapp.com",
  projectId: "stayconnect-auth",
  storageBucket: "stayconnect-auth.firebasestorage.app",
  messagingSenderId: "854556606222",
  appId: "1:854556606222:web:0cd705415d71a14636615f",
  measurementId: "G-LVYJVF4XFN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();