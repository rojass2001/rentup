function Pageheading({ mainhead, subhead }) {
    return (
  <div className='w-full h-[350px] mt-[60px] relative'>
    <img  className="w-full h-full"src="https://cdn.webhotelier.net/photos/w=1920/peninsula-fam/L586697.jpg"/>
    <div className='absolute top-32 left-10  '>
      <p className='text-white font-bold text-xl md:text-3xl'>{mainhead}</p>
      <p className='text-white mt-2 font-medium text-3xl  md:text-5xl'>{subhead}</p>
    </div>
  </div>
    )
  }
  
  export default Pageheading
  