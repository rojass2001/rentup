"use client"; // Ensures the component runs on the client side in Next.js

import Link from "next/link";
import tabarray from "./Tabarray"; // Array containing tab data (name, icon, link)
import useAuthentication from "@/app/customhooks/useauth"; // Custom hook for authentication (includes logout)
import { HiOutlineUser } from 'react-icons/hi'; // User icon for logout
import useKeyboardStatus from "@/app/customhooks/useKeyboard"; // Custom hook to detect if the mobile keyboard is open
import { useState } from "react";
import Box from "../Box"; // Custom layout component
import Button from "../Button"; // Custom button component

function Tabbar() {
  const [open, setOpen] = useState(0); // State to track which tab is active
  const { isKeyboardOpen } = useKeyboardStatus(); // Hide tab bar if keyboard is open
  const { logout } = useAuthentication(); // Get logout function

  // Handle tab selection
  const handleTabChange = (index) => {
    setOpen(index);
  };

  return (
    <>
      {/* Only show the tab bar if the keyboard is not open */}
      {!isKeyboardOpen && (
        <Box className="w-full px-1 justify-between text-white min-h-[65px] pt-2 overflow-x-auto border-t-2 border-gray-300 flex gap-4 items-center place-content-center fixed z-50 bottom-0 right-0 left-0 md:hidden bg-green-500">
          
          {/* Loop through the tab array and render each tab */}
          {tabarray.map((a, i) => (
            <Link href={a.link} key={a.name}>
              <Button
                onClick={() => handleTabChange(i)}
                className={`flex items-center ${open === i ? "font-bold" : ""} text-sm place-content-center flex-col`}
              >
                {a.icon}
                {a.name}
              </Button>
            </Link>
          ))}
          
          {/* Logout button (navigates to login page and triggers logout) */}
          <Link href="/login" onClick={logout}>
            <Button
              onClick={() => handleTabChange(5)}
              className={`flex items-center text-sm place-content-center flex-col ${open === 5 ? "font-bold" : ""}`}
            >
              <HiOutlineUser className="text-2xl" />
              Signout
            </Button>
          </Link>
        </Box>
      )}
    </>
  );
}

export default Tabbar;
