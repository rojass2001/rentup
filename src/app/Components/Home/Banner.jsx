"use client"
import Box from "../Box"
import Text from "../Text"
import { banner } from "./Bannerarray"

function Banner() {
      return (
    <Box className='w-full pb-20 bg-slate-100  '>
      <Box className='w-full px-3 pt-8 gap-9 md:gap-16 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3md:px-12   '>
          {banner.map((b,index)=>(
            <Box className='space-y-2 w-full h-[200px] bg-white  justify-center text-center place-items-center pt-6' key={index}>
            <Box className="w-full flex items-center place-content-center"><img className="h-12 w-12"src={b.image}/></Box>
              <Text className='font-semibold text-[18px]'>{b.name}</Text>
              <Text>{b.property}</Text>
            </Box>
          ))}
      </Box>
    </Box>
      )
    }
    
    export default Banner