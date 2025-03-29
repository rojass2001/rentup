
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaFacebook,FaLinkedin,FaTwitter,FaInstagram, FaPhone } from "react-icons/fa"
import { FaLocationDot, } from 'react-icons/fa6'
import {agent,agenticons} from './Agentsarray';
function Agents() {
  return (
    <>
  <div className='w-full text-center pb-12 pt-12 bg-slate-100'style={{color:"#2d3954"}}>
      <h1 className='text-[32px] font-bold' >Our Featured Agent</h1>
      <p  className='text-slate-500 text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
      <p className='text-slate-500 text-[18px]'>tempor incididunt ut labore et dolore magna </p> 
      <p className='text-slate-500 text-[18px]'>aliqua. Ut enim ad minim veniam.</p>

     <div className='w-full px-2 mt-12 grid  gap-9 grid-cols-1 lg:grid-cols-3 lg:px-24  md:px-12  md:grid-cols-2 '>
      { agent?.map((c,index)=>(
        <div className='px-5 bg-white  py-8 ' key={index}>
          <div className=' w-[140px] flex items-center  place-content-center text-white font-bold
            text-[16px] rounded-full h-14 bg-orange-600'>
            {c.listing}
          </div>
      <div className='w-full flex  mt-2 items-center  place-content-center'>
       <img className="rounded-full  p-2 border-4 border-slate-300 w-[120px] h-[120px] " src={c.image}/>
     </div>
      <div className='flex justify-center items-center w-full'><FaLocationDot/><p className='text-slate-600'>{c.location}</p> 
      </div>
       <p className='text-black font-semibold text-[18px] mt-3'>{c.name}</p>
       <div className=' place-content-center mt-4 flex w-full gap-3 text-slate-400 text-xl'> 
        {agenticons?.map((icon)=>{
        <>
         <div className='bg-slate-200 p-3 rounded-full' key={icon}>{icon}</div>
        </>
        }) }
       </div>

        <div className='w-full mt-6 flex justify-between  '>
        <div className='w-[50%] rounded-lg h-14  gap-1 flex place-content-center text-white items-center bg-green-500'>
          <BiSolidMessageDetail className='text-3xl' /><p className='font-bold text-md'>Message</p>
        </div>
         <div className='w-[30%] flex place-content-center h-14 bg-black text-2xl items-center text-white'><FaPhone/></div>
        </div>

       </div>
      ))}
    </div>
  </div>
    </>
  )
}

export default Agents
