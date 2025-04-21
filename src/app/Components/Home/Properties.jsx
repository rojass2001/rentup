"use client"
import { FaLocationDot } from "react-icons/fa6";
import propertyarray from './Propertyarray';
function Properties() {
  return (
    <>
  <div className='w-full    bg-slate-100 py-12'>
    <div className='w-full py-12 gap-12 px-2 md:px-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {propertyarray.map((a,index)=>(
        <div className='h-[490px] bg-white  space-y-4 '  key={index}>
         <img className='w-full h-[50%]' src={a.image}/>
          <div className='w-full flex justify-between px-5'>
            <p className={`text-[14px] font-bold px-2 bg-gray-300 ${a.purpose==="For Sale"?"text-green-500":"text-orange-400"}`}>
            {a.purpose}</p> 
            <p>{a.icon}</p>
          </div>
            <p  className='font-medium ml-5 text-[19px]'>{a.name}</p>
            <div className='flex ml-5 gap-2 items-center'>
            <FaLocationDot className='text-slate-400'/>
            <p className='text-slate-500 font-medium text-[18px]'>{a.location}</p>
            </div>
        <div className='flex w-full px-7 pt-3  border-t-[1px] border-gray-300 items-center justify-around sm:justify-between '>
        <div className='flex items-center gap-1 '>
          <button className='w-[135px] h-[60px] text-xl rounded-full text-white 
          font-bold bg-green-600'><span className='text-[22px] mr-1'>$</span>{a.price}</button>
          <p>/sqft</p>
        </div>
         <p className='text-[18px] text-black font-semibold'>{a.type}</p>
      </div>
     </div>
            )) }
    </div>

  </div>
    </>
  )
}

export default Properties
