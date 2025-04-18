"use client"
import { FaLock, } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
import useAuth from '../customhooks/useauth'
import useInput from '../customhooks/useInput'
import Form from '../Components/Form'
const inputcontainer = "w-full px-2 border-[1px] border-green-500 flex items-center bg-gray-100"

function Register() {
   const [values, handlechange] = useInput({
      email: "",
      password:""
  })
   const{registersubmit}=useAuth(values.email,values.password)
  return (
  <Form className='w-full   h-screen flex px-2 items-center place-content-center'>
    <div className='form md:w-[50%] border-2 py-3 border-green-500 lg:w-[26%] sm:w-full px-2 pb-4 min-h-[300px] sm:h-auto flex items-center 
          flex-col space-y-6 shadow-md bg-white rounded-3xl shadow-gray-300'>
          <h1 className='font-bold text-green-400 text-3xl'>Sign up</h1>
        <div className={inputcontainer} > 
                <MdEmail /> <input required className='outline-none w-full h-12 pl-2 bg-gray-100' name="email" value={values.email} onChange={handlechange} placeholder='enter email' type="email"/>
        </div>
        <div className={inputcontainer} > 
          <FaLock /> <input required className='outline-none w-full h-12 pl-2  bg-gray-100' name="password" value={values.password} onChange={handlechange} placeholder='enter password' type="password"/>
        </div>
        <Link href="/login" className='text-sm underline'>already have account please login</Link>
        <button onClick={registersubmit} className=' bg-green-500 text-white rounded-xl w-[50%]  py-2 font-bold'>Register</button>
        
    </div>
  </Form> 
  )
}

export default Register