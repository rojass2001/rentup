"use client"; // Enables client-side rendering in Next.js (App Router)

import React from "react"; // Importing React library
import { IoSearchSharp } from "react-icons/io5"; // Importing search icon from react-icons
import Box from "../Box"; // Reusable Box component for layout
import Text from "../Text"; // Reusable Text component to display text content
import Button from "../Button"; // Reusable Button component

const input = "w-full h-10 border-2 border-gray-400"; // Reusable CSS class for input fields

function Hero() {
  return (
    <Box className="w-full mt-[60px]">
      {/* Main container Box with background image */}
      <Box
        className="w-full md:px-11 relative place-items-center place-content-center bg-cover bg-no-repeat min-h-screen px-6"
        style={{ backgroundImage: `url('./hero.jpg')` }} // Hero section background image
      >
        {/* Main Heading */}
        <Text className="text-3xl md:text-6xl text-center font-bold text-white">
          Search your Next Homes
        </Text>

        {/* Subheading */}
        <Text className="font-semibold text-center text-white mt-3 text-xl inline-block">
          Find new & featured property located in your{" "}
          <span className="text-center">local city.</span>
        </Text>

        {/* Search form with 4 input boxes */}
        <Box className="w-full mt-16 bg-white gap-6 px-3 py-4 grid md:grid-cols-4 grid-cols-1">
          {/* City or Street Input */}
          <Box>
            <Text className="font-bold">City/Street</Text>
            <input
              type="text"
              className={input}
              placeholder="Location"
              aria-label="City or street"
            />
          </Box>

          {/* Property Type Input */}
          <Box>
            <Text className="font-bold">Property Type</Text>
            <input
              type="text"
              className={input}
              placeholder="Property Type"
              aria-label="Property type"
            />
          </Box>

          {/* Price Range Input */}
          <Box>
            <Text className="font-bold">Price Range</Text>
            <input
              className={input}
              placeholder="Price Range"
              aria-label="Price range"
            />
          </Box>

          {/* Advanced Filter Button */}
          <Box className="flex justify-around">
            <Box className="text-md font-bold text-black">
              <Text className="mt-2">Advanced</Text>
              <Text>Filter</Text>
            </Box>
            <Button className="w-16 flex items-center rounded-lg place-content-center h-14 bg-green-500 my-auto">
              {/* Search Icon Button */}
              <IoSearchSharp className="text-white" size={28} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
