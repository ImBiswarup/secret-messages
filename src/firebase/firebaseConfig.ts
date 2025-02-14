import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDzNim0NGimJnScgdIeqisLh_vRt-wudmk",
    authDomain: "secret-msg-c2f04.firebaseapp.com",
    databaseURL: "https://secret-msg-c2f04-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "secret-msg-c2f04",
    storageBucket: "secret-msg-c2f04.firebasestorage.app",
    messagingSenderId: "364787008959",
    appId: "1:364787008959:web:70f323f683e26400078d0a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
