"use client"
import React from 'react'
import Box from '../Box'
import Text from '../Text'

function Recentlylisted() {
  return (
    <>
    <Box className='w-full h-[200px] mb-5 text-center place-items-center justify-center pt-14 sm:mb-[40px]'>
      <Text className='text-4xl mb-4   font-bold text-slate-700'>Recent Property Listed</Text>
      <Text className='text-center place-items-center justify-center text-black max-w-[500px]  '> Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolor
        magna aliqua. Ut enim ad minim veniam
      </Text>
    </Box>
    </>
  )
}

export default Recentlylisted