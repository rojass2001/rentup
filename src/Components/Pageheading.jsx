"use client";
import Box from "./Box";
import Text from "./Text";

function Pageheading({ mainhead, subhead }) {
  return (
    <Box className="w-full h-[350px] mt-[60px] relative">
      <img className="w-full h-full" src="https://cdn.webhotelier.net/photos/w=1920/peninsula-fam/L586697.jpg" alt="Page Banner" />
      <Box className="absolute top-32 left-10">
        <Text className="text-white font-bold text-xl md:text-3xl">{mainhead}</Text>
        <Text className="text-white mt-2 font-medium text-3xl md:text-5xl">{subhead}</Text>
      </Box>
    </Box>
  );
}

export default Pageheading;
