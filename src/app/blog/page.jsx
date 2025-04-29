"use client"
import Pageheading from "../Components/Pageheading"
import Properties from "../Components/Home/Properties"
import Box from "../Components/Box"

function Blog() {
  return (
    <Box className='w-full'>
      <Pageheading mainhead="Blog" subhead="Blog Grid - Our Blogs"/>
      <Properties/>
    </Box>
  )
}

export default Blog
