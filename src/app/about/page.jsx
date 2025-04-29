import Box from "../Components/Box"
import Button from "../Components/Button"
import Pageheading from "../Components/Pageheading"
import Text from "../Components/Text"

function About() {
  return (
<Box className='w-full'>
      <Pageheading mainhead="About Us" subhead="About Us - Who We Are?"/>

 <Box className='w-full   py-20 bg-white flex gap-5 flex-col md:flex-row px-1'>
  <Box className='md:w-[50%] text-[18px] text-center md:text-start  text-black w-full'>
   <Text className="text-4xl font-bold">Our Agency Story</Text>
   <Text  className="font-bold mt-2" >Check out our company story and work process</Text>
   <Text className='mt-7 font-serif '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
    <Text className='mt-12 font-serif '>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod     tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
    </Text>
     <Button className='bg-green-500 px-2 mt-2 py-4 font-bold w-[40%] rounded-full text-white  '>More About Us</Button>
  </Box>
  <img className='md:w-[50%] w-full h-[80%]  md:h-[500px]' src="https://funny-daffodil-350bc9.netlify.app/immio.jpg" />
 </Box>
</Box>
  )
}

export default About

