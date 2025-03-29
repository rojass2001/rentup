import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
const input="w-full h-10 border-2 border-gray-400"
function Hero() {
  return (
    <>
 <div className='w-full mt-[60px] '>
   <div className='w-full   md:px-11 relative place-items-center 
      place-content-center bg-cover  bg-no-repeat   min-h-screen px-6'style={{backgroundImage:`url(${'./hero.jpg'})`}}>   
      <h1 className=' text-3xl md:text-6xl text-center font-bold  text-white'>Search your Next Homes</h1>
     <p className='font-semibold  text-center text-white mt-3 text-xl inline-block'>Find new & featured property located in your <span className='text-center'>local city.</span></p>
     <div className='w-full mt-16 bg-white
        gap-6 px-3 py-4   grid md:grid-cols-4 grid-cols-1 '>
        <div><p className='font-bold'>City/Street</p>
        <input type="text" className={input}placeholder='Location'/>
        </div>
        <div><p className='font-bold'>Property Type</p>
        <input type="text"className={input}placeholder='Propert Type'/>
        </div>
        <div><p className=' font-bold '>Price Range</p>
        <input className={input} placeholder ='Price Range'/>
        </div>
       <div className='flex justify-around'>
            <div className='text-md font-bold text-black'>
            <p className='mt-2 '> Advanced </p>
            <p >Filter</p></div>
         <button className='w-16 flex items-center rounded-lg place-content-center  h-14 bg-green-500 my-auto '>
            <IoSearchSharp className='text-white' size={28}/>
         </button>
       </div>
      </div>
   </div>
 </div>
    </>
  )
}

export default Hero
