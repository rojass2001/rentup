import Contactfooter from "./Contactfooter"
const layouts=["Home Page","About Page","Service Page","Property Page","Contact Page","Single Blog"]
const allsection=["Headers","Features","Attractive","Testimonials", "Videos"," Footer"]
const company=["About","Blog","Pricing","Affiliate","Login","Changelog"]

function Footer() {
  
  return (
    <>
<footer className='w-full'>
  <div className=' w-full justify-center place-items-center grid py-5 px-3  gap-x-3 gap-y-10 text-white grid-cols-2  md:grid-cols-4 bg-slate-800' >
    <div className='space-y-3  px-2 h-[300px]' >
      <img className="w-[70%] h-9"src="https://funny-daffodil-350bc9.netlify.app/images/logo-light.png"/>
      <p className='text-2xl text-white'>Do You Need Help With Anything</p>
      <p className='text-[17px] '>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
      <div className='w-full flex  '>
       <input className='w-[70%] rounded-lg h-12' type="text" placeholder='your email' />
       <button className='w-[50%] rounded-lg text-white bg-green-500 h-12'>Subscribe</button>
      </div>
    </div>
    <div className='space-y-3'>
      <p className='text-2xl  text-white mb-7 font-bold '>Layouts</p>
      {layouts.map((a,index)=>(
      <p className='text-[18px] ' key={index}>{a}</p>
      ))}
    </div>
    <div className='space-y-3'>
      <p className='text-2xl  text-white mb-7 font-bold '>All Sections</p>
      {allsection.map((b,index)=>(
      <p className='text-[18px] ' key={index}>{b}</p>
      ))}
    </div>
    <div className=' space-y-3'>
       <p className='text-2xl  text-white mb-7 font-bold '>Company</p>
       {company.map((c,index)=>(
       <p className='text-[18px] ' key={index}>{c}</p>
       ))}
     </div>
    </div>
</footer>
    </>
    
  )
}

export default Footer
