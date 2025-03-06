import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVP0aqek1mj56h-EJLaTKduv8nc0d7XWQ",
    authDomain: "clgmansy.firebaseapp.com",
    projectId: "clgmansy",
    storageBucket: "clgmansy.firebasestorage.app",
    messagingSenderId: "267292209569",
    appId: "1:267292209569:web:9ca7cc9e863a807c445be0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);