"use client"
import Link from "next/link"
import tabarray from "./Tabarray"
import useAuth from "@/app/customhooks/useauth"
import { IoSettingsOutline } from "react-icons/io5"; 
import useKeyboardStatus from "@/app/customhooks/useKeyboard";
function Tabbar() {
      const{isKeyboardOpen}=useKeyboardStatus()
      const{logout}=useAuth()
  return (
    <>
      {!isKeyboardOpen&&(
        <div className='w-full px-2 text-green-500 h-[60px] pt-2 overflow-x-auto border-t-2 border-gray-300 flex gap-4 items-center place-content-center fixed z-50 bottom-0 right-0 left-0  md:hidden bg-white'>
          {tabarray.map((a) => (
            <Link href={a.link} key={a.name}>
              <button className='flex items-center text-sm place-content-center flex-col'>{a.icon}{a.name}</button>
            </Link>
          ))}
          
          <Link href="/login">
            <button onClick={logout} className='flex items-center text-sm place-content-center flex-col'><IoSettingsOutline className='text-2xl' />logout</button>
          </Link>
        </div>
      )}
    </>
      )
    }
    
    export default Tabbar
    

