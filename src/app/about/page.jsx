import Pageheading from "../Components/Pageheading"

function About() {
  return (
<div className='w-full'>
      <Pageheading mainhead="About Us" subhead="About Us - Who We Are?"/>

 <div className='w-full   py-20 bg-white flex gap-5 flex-col md:flex-row px-1'>
  <div className='md:w-[50%] text-[18px] text-center md:text-start  text-black w-full'>
   <h2 className="text-4xl font-bold">Our Agency Story</h2>
   <h3  className="font-bold mt-2" >Check out our company story and work process</h3>
   <p  className='mt-7 font-serif '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p className='mt-12 font-serif '>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod     tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
     </p>
     <button className='bg-green-500 px-2 mt-2 py-4 font-bold w-[40%] rounded-full text-white  '>More About Us</button>
  </div>
  <img className='md:w-[50%] w-full h-[80%]  md:h-[500px]' src="https://funny-daffodil-350bc9.netlify.app/immio.jpg" />
 </div>
</div>
  )
}

export default About

