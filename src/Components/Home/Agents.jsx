"use client"
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaFacebook,FaLinkedin,FaTwitter,FaInstagram, FaPhone } from "react-icons/fa"
import { FaLocationDot, } from 'react-icons/fa6'
import {agent,agenticons} from './Agentsarray';
import Box from "../Box";
import Text from "../Text";

function Agents() {
  return (
  <Box className='w-full text-center pb-12 pt-12 bg-slate-100'style={{color:"#2d3954"}}>
      <Text className='text-[32px] font-bold' >Our Featured Agents</Text>
      <Text className='text-slate-500 text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
      <Text className='text-slate-500 text-[18px]'>tempor incididunt ut labore et dolore magna </Text> 
      <Text className='text-slate-500 text-[18px]'>aliqua. Ut enim ad minim veniam.</Text>
    <Box className='w-full px-2 mt-12 grid  gap-9 grid-cols-1 lg:grid-cols-3 lg:px-24  md:px-12  md:grid-cols-2 '>
      {agent?.map((c,index)=>(
      <Box className='px-5 bg-white  py-8 ' key={index}>
        <Box className=' w-[140px] flex items-center  place-content-center text-white font-bold text-[16px] rounded-full h-14 bg-orange-600'>{c.listing}</Box>
          <Box className='w-full flex  mt-2 items-center  place-content-center'>
            <img className="rounded-full  p-2 border-4 border-slate-300 w-[120px] h-[120px] " src={c.image}/>
          </Box>
        <Box className='flex justify-center items-center w-full'><FaLocationDot/><Text className='text-slate-600'>{c.location}</Text></Box>
          <Text className='text-black font-semibold text-[18px] mt-3'>{c.name}</Text>
          <Box className=' place-content-center mt-4 flex w-full gap-3 text-slate-400 text-xl'> 
           {agenticons?.map((icon)=>{
            <>
              <Box className='bg-slate-200 p-3 rounded-full' key={icon}>{icon}</Box>
            </>
           })}
          </Box>
        <Box className='w-full mt-6 flex justify-between  '>
          <Box className='w-[50%] rounded-lg h-14  gap-1 flex place-content-center text-white items-center bg-green-500'>
            <BiSolidMessageDetail className='text-3xl' /><Text className='font-bold text-md'>Message</Text>
          </Box>
         <Box className='w-[30%] flex place-content-center h-14 bg-black text-2xl items-center text-white'><FaPhone/></Box></Box>
        </Box>
           ))}
    </Box>
  </Box>
  )
}

export default Agents
