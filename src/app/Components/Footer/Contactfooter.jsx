"use client"

import Box from "../Box"
import Text from "../Text"

function Contactfooter() {
return (   
  <footer className='w-full  flex items-center justify-between py-8 text-white
       bg-green-500 md:px-3  px-1 lg:px-20 '>
      <Box>
         <Text className='font-bold text-2xl md:text-[35px] lg:text-[43px] '>Do You Have Questions</Text>
         <Text className='text-xl '>We will help you to grow your career and growth.</Text>
      </Box>
        <Box className='bg-white flex items-center  font-semi-bold text-[20px] text-green-500 text-center 
          place-content-center h-[70px] p-1 md:px-3 rounded-full '>
          Contact Us Today
        </Box>
   </footer>
    )
  }
  
  export default Contactfooter