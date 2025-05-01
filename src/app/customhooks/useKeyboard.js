"use client"; // Ensures this code runs only on the client-side (Next.js requirement for browser APIs)

import { useEffect, useState } from 'react';

// Custom hook to detect if the on-screen keyboard is open (primarily useful for mobile)
const useKeyboardStatus = () => {
  // Local state to track whether keyboard is open
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    // Handler for detecting focus on input fields or editable elements
    const handleFocusIn = (e) => {
      if (
        e.target.tagName === 'INPUT' || 
        e.target.tagName === 'TEXTAREA' || 
        e.target.contentEditable === 'true'
      ) {
        setIsKeyboardOpen(true); // Keyboard is likely open
      }
    };

    // Handler for when focus is lost from input fields
    const handleFocusOut = () => {
      setIsKeyboardOpen(false); // Keyboard is likely closed
    };

    // Add event listeners to detect focus changes
    window.addEventListener('focusin', handleFocusIn);
    window.addEventListener('focusout', handleFocusOut);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener('focusin', handleFocusIn);
      window.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  // Return the current keyboard open status
  return { isKeyboardOpen };
};

export default useKeyboardStatus;
