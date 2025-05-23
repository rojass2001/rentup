"use client"; // Ensures the component runs on the client side in Next.js

import Link from "next/link";
import tabarray from "./Tabarray"; // Array containing tab data (name, icon, link)
import useAuthentication from "@/customhooks/useauth"; // Custom hook for authentication (includes logout)
import { HiOutlineUser } from 'react-icons/hi'; // User icon for logout
import useKeyboardStatus from "@/customhooks/useKeyboard"; // Custom hook to detect if the mobile keyboard is open
import Box from "../Box"; // Custom layout component
import Button from "../Button"; // Custom button component
import { useMyTabContext } from "@/contextApi/Tabcontext"; // Context API for managing tab state


function Tabbar() {
  const { activetab, setcurrentactivetab } = useMyTabContext();
  const { isKeyboardOpen } = useKeyboardStatus(); // Hide tab bar if keyboard is open
  const { logout } = useAuthentication(); // Get logout function

  return (

    <>

      {/* Only show the tab bar if the keyboard is not open */}
      {!isKeyboardOpen && (
        <Box className="w-full px-1 justify-between text-white min-h-[65px] pt-2 overflow-x-auto border-t-2 border-gray-300 flex gap-4 items-center place-content-center fixed z-50 bottom-0 right-0 left-0 md:hidden bg-green-500">

          {/* Loop through the tab array and render each tab */}
          {tabarray.map((a, i) => (
            <Link href={a.link} key={a.name}>
              <Button
                onClick={() => setcurrentactivetab(i)}
                className={`flex items-center ${activetab === i ? "font-bold" : ""} text-sm place-content-center flex-col`}
              >
                {a.icon}
                {a.name}
              </Button>
            </Link>
          ))}

          {/* Logout button (navigates to login page and triggers logout) */}
          <Link href="/login" onClick={logout}>
            <Button
              onClick={() => setcurrentactivetab(6)}
              className={`flex items-center text-sm place-content-center flex-col `}
            >
              <HiOutlineUser className="text-2xl mx-auto" />
              Signout
            </Button>
          </Link>
        </Box>
      )
      }

    </>

  );
}

export default Tabbar;
