"use client"; // Ensures this file runs on the client side in Next.js

// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDV8kDGzCBfpRxmQQHzm1SMdEngxADHCd8",
  authDomain: "rentup-85748.firebaseapp.com",
  projectId: "rentup-85748",
  storageBucket: "rentup-85748.firebasestorage.app",
  messagingSenderId: "65037111585",
  appId: "1:65037111585:web:60a8ddef02971a8c8c2e60"
};

// Initialize Firebase app instance
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export the auth object for use in other parts of your app
export { auth };
