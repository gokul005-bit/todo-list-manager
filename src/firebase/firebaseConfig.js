import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-x6Z1rS5pa2sikzCcS4iwSNjE9or98Y4",
  authDomain: "todoapp-7f79a.firebaseapp.com",
  projectId: "todoapp-7f79a",
  storageBucket: "todoapp-7f79a.firebasestorage.app",
  messagingSenderId: "940102265382",
  appId: "1:940102265382:web:3b624879d571e2f04094e7",
  measurementId: "G-CZYXHKFS48"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  const token = await result.user.getIdToken();
  localStorage.setItem("token", token);
  return token;
};