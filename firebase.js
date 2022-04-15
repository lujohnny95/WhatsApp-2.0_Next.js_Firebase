import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_CONFIG_API_KEY,
    authDomain: "whatsapp-2-ab770.firebaseapp.com",
    projectId: "whatsapp-2-ab770",
    storageBucket: "whatsapp-2-ab770.appspot.com",
    messagingSenderId: "472314071908",
    appId: "1:472314071908:web:626fdcbe815825d94b0871",
    measurementId: "G-YM0V2FGPTK"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };