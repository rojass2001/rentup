"use client"
import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import Box from '../Box';
import Text from '../Text';
import Button from '../Button';
const input = "w-full h-10 border-2 border-gray-400"

function Hero() {
return (
    <>
 <Box className='w-full mt-[60px] '>
   <Box className='w-full   md:px-11 relative place-items-center 
      place-content-center bg-cover  bg-no-repeat   min-h-screen px-6' style={{backgroundImage:`url(${'./hero.jpg'})`}}>   
      <Text className=' text-3xl md:text-6xl text-center font-bold  text-white'>Search your Next Homes</Text>
      <Text className='font-semibold  text-center text-white mt-3 text-xl inline-block'>Find new & featured property located in your <span className='text-center'>local city.</span></Text>
     <Box className='w-full mt-16 bg-white gap-6 px-3 py-4   grid md:grid-cols-4 grid-cols-1 '>
       <Box>
         <Text className='font-bold'>City/Street</Text>
         <input type="text" className={input}placeholder='Location'/>
       </Box>
       <Box>
         <Text className='font-bold'>Property Type</Text>
         <input type="text" className={input} placeholder='Propert Type' />
       </Box>
       <Box>
         <Text className=' font-bold '>Price Range</Text>
         <input className={input} placeholder ='Price Range'/>
        </Box>
       <Box className='flex justify-around'>
          <Box className='text-md font-bold text-black'>
            <Text className='mt-2 '> Advanced </Text>
            <Text>Filter</Text>
          </Box>
          <Button className='w-16 flex items-center rounded-lg place-content-center  h-14 bg-green-500 my-auto '>
            <IoSearchSharp className='text-white' size={28}/>
          </Button>
        </Box>
     </Box>
   </Box>
 </Box>
    </>
  )
}

export default Hero
