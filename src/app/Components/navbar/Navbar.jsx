"use client"
import { useState } from 'react'
import { FaBars,  } from 'react-icons/fa'
import { motion } from 'framer-motion';
import navarray from './Navarray';
import Link from 'next/link';
import Mobiledrawer from './Mobiledrawer';
import useAuth from '@/app/customhooks/useauth';

function Navbar() {
  const [open, setopen] = useState(false)
  const{logout}=useAuth()
  const openandclose=()=>{
    setopen(!open)
  }
  
  return (
    <>
  <motion.nav
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.6,delay:0.6}}
        className='w-full fixed z-30 top-0  right-0 left-0 text-black items-center justify-between md:justify-around h-16 flex 
        bg-white shadow-sm shadow-gray-400 '>
          <div >
      <img className ="w-[155px] h-full"src="https://funny-daffodil-350bc9.netlify.app/images/logo.png"/>
          </div>
          <div className='hidden md:flex font-medium text-[17px] gap-5 '>
              {navarray?.slice(0,5).map((a)=>( 
                <Link href={a.links}  key={a.name} >
                  <li className="hover:text-green-500 mr-3 list-none" >{a.name}</li>
                </Link>
              ))}
          <Link href="/login" onClick={logout}><li className="hover:text-green-500 mr-3 list-none" >Signout</li></Link> 
          </div>
          <Link href="/login"><button className='bg-green-500 hidden md:block  rounded-lg w-32 h-[50px] text-md
          text-white font-bold ' >Sign in</button></Link>
        {/*mobilenavbar*/}
          <button className='md:hidden flex items-center place-content-center  bg-green-500 rounded-lg w-28 h-[80%] text-[30px] text-white 
          font-bold  ' onClick={openandclose}><FaBars /></button>
       
            <Mobiledrawer openandclose={openandclose} open={open}/>
  </motion.nav>
      </>
  )
}

export default Navbar