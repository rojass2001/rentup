import { icons } from "./ourawararray"
function Ourawards() {
  return (
    <>
    <div className='w-full py-5   'style={{backgroundColor:"#122947",color:"#fff"}}>
    <div className=' text-center pb-20 pt-8 font-normal  w-full'>
      <p className='text-green-500 mb-3 text-xl'>Our Awards</p>
      <h1 className='text-[35px] '>Over 1,24,000+ Happy User Bieng With Us</h1>
      <h1 className='text-[33px] mt-1'>Still They Love Our Services</h1>
      </div>
      <div className='grid gap-8 justify-center place-items-center grid-cols-2 px-2 lg:px-12 md:grid-cols-4 '>
        { icons.map((c)=>(
          <div className='text-center place-items-center justify-center' key={c.name}>
        <div className=' h-28 justify-center  flex items-center place-content-center rounded-bl-[50px] bg-slate-700 w-28 rounded-tr-[50px]'> 
        <p className='text-[38px]'>{c.icon}</p>
        </div>
        <h1 className='text-3xl font-bold'>{c.name}</h1>
        <p className='text-gray-400 text-[18px]'>{c.award}</p>
      </div>
))}</div>
   

    </div>
    </>
  )
}

export default Ourawards
