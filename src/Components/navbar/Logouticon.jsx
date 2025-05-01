"use client"
import { HiOutlineUser } from 'react-icons/hi'
import Box from '../Box';
import Button from '../Button'
import { IoSettingsOutline } from "react-icons/io5";
import useAuth from '@/app/customhooks/useauth'
import Link from 'next/link'

function Logouticon() {
  const{logout}=useAuth()
  return (
    <Box className="relative hidden md:block bg-white rounded-full p-2 h-[60%] shadow-md shadow-gray-300 group">
      {/* User Icon */}
      <HiOutlineUser className="text-xl text-black" />

      {/* Sign Out Button (visible on hover) */}
      <Button
        onClick={logout}
        className="absolute hidden group-hover:flex right-[-25px] top-[36px] items-center gap-1 p-2 bg-green-500 text-white font-bold text-sm rounded-full"
      >
        <IoSettingsOutline />
        Signout
      </Button>
    </Box>

  )
}

export default Logouticon
