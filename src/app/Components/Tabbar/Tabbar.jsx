"use client"
import Link from "next/link"
import tabarray from "./Tabarray"
import useAuthentication from "@/app/customhooks/useauth"
import { HiOutlineUser } from 'react-icons/hi'
import useKeyboardStatus from "@/app/customhooks/useKeyboard";
import { useState } from "react";
import Box from "../Box";
import Button from "../Button";

function Tabbar() {
      const[open,setopen]=useState(0)
      const{isKeyboardOpen}=useKeyboardStatus()
      const { logout } = useAuthentication()
   const changecolor=(index)=>{ setopen(index)}
  return (
    <>
  {!isKeyboardOpen&&(
     <Box className={`w-full px-1 justify-between  text-white min-h-[65px] pt-2 overflow-x-auto border-t-2 border-gray-300 flex gap-4 items-center place-content-center fixed z-50 bottom-0 right-0 left-0  md:hidden bg-green-500`}>
        {tabarray.map((a,i) => (
          <Link href={a.link} key={a.name}>
            <Button onClick={()=>changecolor(i)} className={`flex items-center  ${open===i?"font-bold":""} text-sm place-content-center flex-col`}>{a.icon}{a.name}</Button>
          </Link>
         ))}
         <Link href="/login" onClick={logout}>
           <Button onClick={() => changecolor(5)} className={`flex items-center text-sm place-content-center flex-col ${open === 5 ? "font-bold" : ""}`}>
            <HiOutlineUser className='text-2xl' />Signout
           </Button>
         </Link>
      </Box>
      )}
    </>
      )
    }
    
    export default Tabbar
    

