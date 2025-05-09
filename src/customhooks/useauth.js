"use client"; // Ensures the code runs only on the client side (Next.js)

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "@/app/Backend/Firebase";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { useMyTabContext } from "@/contextApi/Tabcontext";

// Custom authentication hook using Firebase Auth
export default function useAuthentication(email, password) {
  const router = useRouter();
  const { setcurrentactivetab } = useMyTabContext()
  // 🟩 Register a new user with email and password
  const registerSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and password are required.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success(`User created successfully: ${email}`);
      router.push("/login"); // Redirect to login page after registration
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error("This email is already registered. Try logging in instead.");

      }
      else {
        toast.error(`Password must be at least 6 characters`);
      }
    }
  };

  // 🟨 Log in an existing user
  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Cookies.set('login', JSON.stringify(true), { expires: 7 }); // Set login state in cookies
      toast.success("Login successful");
      router.push("/");//redirect to home page after login
      setcurrentactivetab(0); // Reset active tab to 0 after login

    } catch (error) {
      toast.error("Invalid username or password");
      console.error(error);
    }
  };

  // 🟦 Send password reset email
  const resetEmail = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required to reset the password.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset link sent. Please check your email.");
      })
      .catch(() => {
        toast.error("Please enter a valid email.");
      });
  };

  // 🟥 Log out the user (just updates the cookie state)
  const logout = async () => {
    const login = JSON.parse(Cookies.get('login'));

    if (login === true) {
      Cookies.set('login', JSON.stringify(false), { expires: 7 });
      toast.success("Successfully logged out");
      router.push("/login"); // Redirect to login page
    } else {
      toast.warning("Please log in first");
      router.push("/login"); // Redirect to login page if not logged in
    }
  };

  // 🟪 Handle contact form submission (basic success toast)
  const contactSubmit = (e) => {
    e.preventDefault();
    toast.success("Message submitted successfully");
  };

  // Return all handler functions
  return { registerSubmit, loginSubmit, resetEmail, logout, contactSubmit };
}
