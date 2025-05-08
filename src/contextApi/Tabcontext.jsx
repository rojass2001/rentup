"use client"; // Required for client-side context in Next.js App Router

import { createContext, useContext, useState } from 'react';

// Create a new React context with a default value of 0 (the default active tab index)
const Tabcontext = createContext(0);

// Provider component that wraps parts of the app where tab state is needed
export function MyProvider({ children }) {
  // React state to track the currently active tab

  const [activetab, setactivetab] = useState(0);

  // Function to update the active tab index
  const setcurrentactivetab = (i) => {
    setactivetab(i);
  };

  // Wrap children with the context provider and pass state + updater as the context value
  return (
    <Tabcontext.Provider value={{ activetab, setcurrentactivetab }}>
      {children}
    </Tabcontext.Provider>
  );
}

// Custom hook for consuming the tab context anywhere in the app
export function useMyTabContext() {
  return useContext(Tabcontext);
}
