"use client"
import { HiOutlineUser } from 'react-icons/hi'
import Box from '../Box'
import Button from '../Button'
import Text from '../Text'
import { IoSettingsOutline } from "react-icons/io5";
import useAuth from '@/app/customhooks/useauth'
import Link from 'next/link'

function Logouticon() {
    const{logout}=useAuth()
    return (
     <Box className="hidden md:block bg-white relative rounded-full group text-sm shadow-md shadow-gray-300 h-[60%] p-2  ">
        <HiOutlineUser className='text-xl text-black' />
        <Link href="/login">
          <Button onClick={logout} className="hidden group-hover:flex font-bold items-center place-content-center p-2 
            rounded-full bg-green-500 text-white absolute right-[-25px] top-[36px]">
            <IoSettingsOutline/> Signout   
         </Button>
       </Link>
    </Box>
  )
}

export default Logouticon
