"use client"
import { useState } from 'react'
import { FaBars,  } from 'react-icons/fa'
import navarray from './Navarray';
import Link from 'next/link';
import useAuth from '@/app/customhooks/useauth';
import Box from '../Box';
import Logouticon from './Logouticon';
import Button from '../Button';

function Navbar() {
  const [open, setopen] = useState(false)
  const{logout}=useAuth()
  const openandclose=()=>{
    setopen(!open)
  }
  return (
   <nav className='w-full fixed z-50 top-0 pr-1 right-0 left-0 text-black items-center justify-between md:justify-around min-h-16 flex bg-white shadow-sm shadow-gray-400 '>
      <img className ="w-[155px] h-full"src="https://funny-daffodil-350bc9.netlify.app/images/logo.png"/>
      <Box className='hidden md:flex font-medium text-[16px] gap-5 '>
          {navarray?.slice(0,5).map((a)=>( 
            <Link href={a.links}  key={a.name} >
               <li className="hover:text-green-500 mr-3 list-none" >{a.name}</li>
            </Link>
          ))}
      </Box>
      <Box className="flex gap-5 h-full items-center place-content-center">
       <Link href="/login">
        <Button className='bg-green-500  rounded-lg w-32 h-[50px] text-md text-white font-bold '>Sign in</Button>
       </Link>
      <Logouticon/>
      </Box>  
    
   </nav>
  )
}

export default Navbar