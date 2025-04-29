"use client"
import React from 'react'
import { MdEmail } from 'react-icons/md'
import useInput from '../customhooks/useInput'
import useAuthentication from '../customhooks/useauth'
import Form from '../../Components/Form'
import Box from '../../Components/Box'
import Button from '../../Components/Button'
import Text from '../../Components/Text'
const inputcontainer = "w-full px-2 border-[1px] border-green-500 flex items-center bg-gray-100"

function Forgotpassword() {
    const [values, handlechange] = useInput({
        email: "",
    })
    const {resetemail} = useAuthentication(values.email)
  return (
   <Box className='w-full   h-screen flex px-2 items-center place-content-center' >
    <Form className='w-full md:w-[50%] border-2 py-3 place-content-center border-green-500 lg:w-[26%]  px-2 pb-4 min-h-[300px]  flex items-center flex-col space-y-6 shadow-md bg-white rounded-3xl shadow-gray-300' onsubmit={resetemail}>
        <Text className="text-2xl text-green-500 font-bold">Reset Password</Text>
        <Box className={inputcontainer} > 
          <MdEmail />
          <input className='outline-none w-full h-12 pl-2bg-gray-100' type="email" name="email" onChange={handlechange} value={values.email} placeholder='enter your register email'  />
        </Box>
       <Button type="submit" onClick={resetemail} className=' bg-green-500 text-white rounded-xl w-[50%]  py-2 font-bold'>Send Link</Button>
    </Form>
   </Box> 
  )
}

export default Forgotpassword
