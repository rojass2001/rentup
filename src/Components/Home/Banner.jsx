"use client"; // Enables the component to be client-rendered in Next.js (App Router)

import { MyProvider, useMyTabContext } from "@/contextApi/Tabcontext";
// Importing reusable components for layout and text display
import Box from "../Box"; // Container component for layout
import Text from "../Text"; // Component to display text content
import { banner } from "./Bannerarray"; // Importing data for the banner items (assumed to be an array of objects)

function Banner() {
  const{value ,incrementValue}=useMyTabContext()
  return (
    <>
     
    <Box className="w-full pb-20 bg-slate-100">
      {/* Box containing the grid layout for banner items */}
      <Box className="w-full px-3 pt-8 gap-9 md:gap-16 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 md:px-12">
        {/* Mapping through the banner array to dynamically display each banner item */}
        {banner.map((b, index) => (
          <Box
            className="space-y-2 w-full h-[200px] bg-white justify-center text-center place-items-center pt-6"
            key={index}
          >
            {/* Box containing the image for the banner item */}
            <Box className="w-full flex items-center place-content-center">
              <img className="h-12 w-12" src={b.image} alt={b.name} />
            </Box>
            {/* Banner name */}
            <Text className="font-semibold text-[18px]">{b.name}</Text>
            {/* Banner property description */}
            <Text>{b.property}</Text>
          </Box>
        ))}
      </Box>
    </Box> 
  </>  
  );
}

export default Banner;
