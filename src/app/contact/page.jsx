"use client"
import Box from "../Components/Box"
import Button from "../Components/Button"
import Form from "../Components/Form"
import Pageheading from "../Components/Pageheading"
import Text from "../Components/Text"
import useAuth from "../customhooks/useauth"

function Contact() {
  const{contactsubmit}=useAuth()
  return (
  <Box className="w-full">
    <Pageheading mainhead="Contact Us" subhead="Get Helps & Friendly Support"/>
   <Form className='w-full  bg-white py-20  px-2 md:px-12 ' onsubmit={contactsubmit}>
      <Box className='w-full space-y-3 bg-white shadow-md shadow-gray-400 py-12 px-1 md:px-[100px]'>
        <Text className='font-bold mb-5 text-center md:text-start  text-[24px]'>Fill Up The Form</Text>
        <Box className='w-full gap-12  flex flex-col md:flex-row   '>
          <input className='md:w-[60%] font-bold h-10 border-[1px] border-gray-600 outline-none  w-full' required placeholder ='Name'type="text"/>
          <input required className='md:w-[60%] h-10  font-bold border-[1px] border-gray-600 outline-none w-full' type="email" placeholder ='Email'/>
        </Box>
        <input required className="w-full h-10 font-bold mt-5 border-[1px] border-gray-600 outline-none" type="text" placeholder ='Subject'/>
        <textarea required className='w-full h-32 border-[1px] mt-10 border-gray-600 outline-none' placeholder='write message here'/>
        <Button type="submit" className='font-bold h-14 text-center px-3 rounded-lg mt-4 text-white bg-green-500'>Submit Request</Button>
     </Box>
   </Form>
  </Box>
  )
}
export default Contact
