import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'
import navarray from './Navarray'

function Mobiledrawer({openandclose,open}) {
    return (
 <AnimatePresence mode="wait">
     {open && (
        <motion.header
            initial={{ opacity: 0, y: -100 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -100 }}
             transition={{ duration: 0.3, delay: 0.2 }}
             className='w-[90%] absolute py-10 flex flex-col  top-20 rounded-lg right-5 left-5  bg-green-500'>
            
            {navarray?.map((b) => (
               <button className='text-2xl w-full font-bold mb-6 text-white text-center' key={b.name}  onClick={openandclose}> {b.name}</button>
            ))}
        </motion.header>
            )}
 </AnimatePresence>
  )
}

export default Mobiledrawer
