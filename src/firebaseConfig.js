
// ================================ firebase ===============================

// Import the functions you need from the SDKs you need



import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore, collection, addDoc, query, serverTimestamp, orderBy, onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// import {
//   getFirestore, collection, addDoc, setDoc, doc, query, where, getDocs, getDoc, updateDoc, deleteDoc, serverTimestamp, orderBy, onSnapshot
// } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgHA1t1aWUHpHVECPjnbSTKgthVwr-LRU",
  authDomain: "linkedin-clone-65fb6.firebaseapp.com",
  projectId: "linkedin-clone-65fb6",
  storageBucket: "linkedin-clone-65fb6.appspot.com",
  messagingSenderId: "596291941014",
  appId: "1:596291941014:web:596c95c5da15927710c8b7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const storage = getStorage(app);
export {
  auth, db, collection, addDoc, onSnapshot, serverTimestamp, orderBy, query, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,
  onAuthStateChanged,signOut
}