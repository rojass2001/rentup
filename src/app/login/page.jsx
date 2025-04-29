"use client"
import { FaLock,  } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
import useInput from '../customhooks/useInput'
import useAuthentication from '../customhooks/useauth'
import Form from '../Components/Form'
import Box from '../Components/Box'
import Button from '../Components/Button'
import Text from '../Components/Text'
const inputcontainer = "w-full px-2 border-[1px] border-green-500 flex items-center bg-gray-100"

function Login() {
  const [values, handlechange] = useInput({
    email: "",
    password:""
    })
   const{loginsubmit}=useAuthentication(values.email,values.password)
  return (
  <Box className='w-full h-screen flex px-3 items-center place-content-center' >
    <Form className='w-full md:w-[50%] border-2 py-3 border-green-500 lg:w-[26%]  px-2 pb-4 min-h-[300px] sm:h-auto flex items-center flex-col space-y-6 shadow-md bg-white rounded-3xl shadow-gray-300'onsubmit={loginsubmit} >
        <Text className='font-bold text-green-400 text-3xl'>Sign in</Text>
        <Box className={inputcontainer} > 
          <MdEmail /> <input required className='outline-none w-full h-12 pl-2bg-gray-100' name="email"  onChange={handlechange} value={values.email} placeholder='enter email' type="email"/>
        </Box>
        <Box className={inputcontainer} > 
          <FaLock /> <input required className='outline-none w-full h-12 pl-2  bg-gray-100' name="password"  onChange={handlechange} value={values.password} placeholder='enter password' type="password"/>
        </Box>
        <Link className='text-sm underline ' href="/forgotpassword"> forgot password?</Link>
        <Link  href="/register" className='underline text-sm'>dont have account please register</Link>
        <Button type="submit" className=' bg-green-500 text-white rounded-xl w-[50%]  py-2 font-bold'>Login</Button>
     </Form>
  </Box> 
  )
}

export default Login