import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'
import navarray from './Navarray'
import Link from 'next/link'
import useAuth from '@/app/customhooks/useauth'

function Mobiledrawer({ openandclose, open }) {
    const { logout } = useAuth()
    
    return (
 <AnimatePresence mode="wait">
     {open && (
        <motion.header
            initial={{ opacity: 0, y: -100 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -100 }}
             transition={{ duration: 0.3, delay: 0.2 }}
             className='w-[90%] absolute py-10 flex flex-col text-2xl text-white font-bold top-20 rounded-lg right-5 left-5  bg-green-500'>
            
            {navarray?.map((b) => (
               <Link href={b.links} key={b.name} ><button className='w-full mb-6' onClick={openandclose}> {b.name}</button></Link> 
                
            ))}
             <Link href="/login" onClick={openandclose} > <button onClick={logout} className='text-2xl w-full '>Signout</button></Link>    
        </motion.header>
            )}
 </AnimatePresence>
  )
}

export default Mobiledrawer
