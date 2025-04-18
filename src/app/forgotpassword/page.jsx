"use client"
import React from 'react'
import { MdEmail } from 'react-icons/md'
import useInput from '../customhooks/useInput'
import useAuth from '../customhooks/useauth'
import Form from '../Components/Form'
const inputcontainer = "w-full px-2 border-[1px] border-green-500 flex items-center bg-gray-100"

function Forgotpassword() {
    const [values, handlechange] = useInput({
        email: "",
    })
    const {resetemail} = useAuth(values.email)
  return (
  <Form className='w-full   h-screen flex px-2 items-center place-content-center' onsubmit={resetemail}>
      <div className='md:w-[50%] border-2 py-3 place-content-center border-green-500 lg:w-[26%] sm:w-full px-2 pb-4 min-h-[300px] sm:h-auto flex items-center 
                        flex-col space-y-6 shadow-md bg-white rounded-3xl shadow-gray-300'>
        <div className={inputcontainer} > 
          <MdEmail /> <input className='outline-none w-full h-12 pl-2bg-gray-100' name="email"  onChange={handlechange} value={values.email} placeholder='enter your register email' type="email"/>
        </div>
            <button onClick={resetemail} className=' bg-green-500 text-white rounded-xl w-[50%]  py-2 font-bold'>Send Link</button>
       </div>
  </Form> 
  )
}

export default Forgotpassword
