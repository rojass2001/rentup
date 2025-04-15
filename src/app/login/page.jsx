"use client"
import { FaLock,  } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
import useInput from '../customhooks/useInput'
import useAuth from '../customhooks/useauth'
const inputcontainer = "w-full px-2 border-[1px] border-green-500 flex items-center bg-gray-100"

function Login() {
  const [values, handlechange] = useInput({
    email: "",
    password:""
})
const{loginsubmit}=useAuth(values.email,values.password)

  return (
    <>
  <div className='w-full   h-screen flex px-2 items-center place-content-center'>
    <div className='md:w-[50%] border-2 py-3 border-green-500 lg:w-[26%] sm:w-full px-2 pb-4 min-h-[300px] sm:h-auto flex items-center 
    flex-col space-y-6 shadow-md bg-white rounded-3xl shadow-gray-300'>
      <h1 className='font-bold text-green-400 text-3xl'>Sign in</h1>
    
    <div className={inputcontainer} > 
       <MdEmail /> <input className='outline-none w-full h-12 pl-2bg-gray-100' name="email"  onChange={handlechange} value={values.email} placeholder='enter email' type="email"/>
    </div>
    <div className={inputcontainer} > 
       <FaLock /> <input  className='outline-none w-full h-12 pl-2  bg-gray-100' name="password"  onChange={handlechange} value={values.password} placeholder='enter password' type="password"/>
          </div>
      <Link className='text-sm underline' href="/forgotpassword"> forgot password?</Link>
    <Link  href="/register"><button className='underline text-sm'>dont have account please register</button></Link>
        <button onClick={loginsubmit} className=' bg-green-500 text-white rounded-xl w-[50%]  py-2 font-bold'>Login</button>
     
    </div>
  </div> 
    </>
  )
}

export default Login