"use client"
import Link from "next/link"
import tabarray from "./Tabarray"
import useAuth from "@/app/customhooks/useauth"
import { IoSettingsOutline } from "react-icons/io5"; 
import useKeyboardStatus from "@/app/customhooks/useKeyboard";
import { useState } from "react";

function Tabbar() {
      const[open,setopen]=useState(0)
      const{isKeyboardOpen}=useKeyboardStatus()
      const { logout } = useAuth()
   const changecolor=(index)=>{ setopen(index)}
  return (
    <>
      {!isKeyboardOpen&&(
        <div className={`w-full px-1 justify-between  text-white min-h-[65px] pt-2 overflow-x-auto border-t-2 border-gray-300 flex gap-4 items-center place-content-center fixed z-50 bottom-0 right-0 left-0  md:hidden bg-green-500`}>
          {tabarray.map((a,i) => (
            <Link href={a.link} key={a.name}>
              <button onClick={()=>changecolor(i)} className={`flex items-center  ${open===i?"font-bold":""} text-sm place-content-center flex-col`}>{a.icon}{a.name}</button>
            </Link>
          ))}
          
          <Link href="/login" onClick={logout}>
            <button onClick={() => changecolor(5)} className={`flex items-center text-sm place-content-center flex-col ${open===5?"font-bold":""}`}><IoSettingsOutline className='text-2xl' />logout</button>
          </Link>
        </div>
      )}
    </>
      )
    }
    
    export default Tabbar
    

