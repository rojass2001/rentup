import { FaHome } from "react-icons/fa";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { RiServiceLine } from "react-icons/ri";
import { FaBloggerB } from "react-icons/fa";
const tabarray = [  
    {
        icon: <FaHome className='text-2xl'/>,
        name: 'Home',
        link:"/"
    },
    {
        icon: <MdOutlineRoundaboutRight className='text-2xl' />,
        name: 'About',
        link:"/about"
    },
    {
        icon: <RiServiceLine className='text-2xl' />,
        name: 'Service',
        link:'/service'
    },
    {
        icon: <FaBloggerB className='text-2xl' />,
        name: 'Blog',
        link:'/blog'
    },
   {
        icon: <IoIosContact className='text-2xl' />,
        name: 'Contact',
        link:"/contact" 
    },
  

];

export default tabarray;