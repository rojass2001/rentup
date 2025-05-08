"use client"

import navarray from './Navarray';
import Link from 'next/link';
import Box from '../Box';
import Logouticon from './Logouticon';
import Button from '../Button';

function Navbar() {
  
  return (
    //navbar component 

  <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm shadow-gray-400 flex items-center justify-between md:justify-around min-h-16 px-4 text-black">
    {/* Logo */}
    <Link href="/">
      <img
        src="https://funny-daffodil-350bc9.netlify.app/images/logo.png"
        alt="Logo"
        className="w-[155px] h-full"
      />
    </Link>

    {/* Navigation Links */}
    <Box className="hidden md:flex gap-5 text-[16px] font-medium">
      <ul className="flex gap-5">
        {navarray?.slice(0, 5).map((item) => (
          <li key={item.name} className="list-none mr-3 hover:text-green-500">
            <Link href={item.links}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </Box>

    {/* Sign In + Logout */}
    <Box className="flex gap-5 items-center">
      <Link href="/login">
        <Button className="bg-green-500 text-white font-bold w-32 h-[50px] text-md rounded-lg">
          Sign in
        </Button>
      </Link>
      <Logouticon />{/* logout icon for logout */}
    </Box>
  </nav>

    )
  }

  export default Navbar



