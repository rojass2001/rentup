"use client"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDV8kDGzCBfpRxmQQHzm1SMdEngxADHCd8",
  authDomain: "rentup-85748.firebaseapp.com",
  projectId: "rentup-85748",
  storageBucket: "rentup-85748.firebasestorage.app",
  messagingSenderId: "65037111585",
  appId: "1:65037111585:web:60a8ddef02971a8c8c2e60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}