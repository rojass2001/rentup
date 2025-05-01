"use client";
import Box from "../Box";
import Text from "../Text";
import { icons } from "./ourawardarray";

function Ourawards() {
  return (
    <Box className="w-full py-5" style={{ backgroundColor: "#122947", color: "#fff" }}>
      {/* Title Section */}
      <Box className="text-center pb-20 pt-8 font-normal w-full">
        <Text className="text-green-500 mb-3 text-xl">Our Awards</Text>
        <Text className="text-[35px]">Over 1,24,000+ Happy Users Being With Us</Text>
        <Text className="text-[33px] mt-1">Still They Love Our Services</Text>
      </Box>

      {/* Award Icons Section */}
      <Box className="grid gap-8 justify-center place-items-center grid-cols-2 px-2 lg:px-12 md:grid-cols-4">
        {icons.map((c) => (
          <Box className="text-center place-items-center justify-center" key={c.name}>
            <Box className="h-28 justify-center flex items-center place-content-center rounded-bl-[50px] bg-slate-700 w-28 rounded-tr-[50px]">
              <Text className="text-[38px]">{c.icon}</Text>
            </Box>
            <Text className="text-3xl font-bold">{c.name}</Text>
            <Text className="text-gray-400 text-[18px]">{c.award}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Ourawards;
