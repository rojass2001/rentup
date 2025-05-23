"use client";
import { FaLocationDot } from "react-icons/fa6";
import propertyArray from "./Propertyarray";
import Box from "../Box";
import Text from "../Text";
import Button from "../Button";

function Properties() {
  return (
    <Box className="w-full bg-slate-100 py-12">
      <Box className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-2 md:px-6">
        {propertyArray.map((property, index) => (
          <Box className="h-[490px] bg-white space-y-4" key={index}>
            <img className="w-full h-[50%]" src={property.image} alt={property.name} />

            {/* Property Info */}
            <Box className="w-full flex justify-between px-5">
              <Text
                className={`text-[14px] font-bold px-2 bg-gray-300 ${
                  property.purpose === "For Sale" ? "text-green-500" : "text-orange-400"
                }`}
              >
                {property.purpose}
              </Text>
              <Text>{property.icon}</Text>
            </Box>

            {/* Property Name */}
            <Text className="font-medium ml-5 text-[19px]">{property.name}</Text>

            {/* Location */}
            <Box className="flex ml-5 gap-2 items-center">
              <FaLocationDot className="text-slate-400" />
              <Text className="text-slate-500 font-medium text-[18px]">{property.location}</Text>
            </Box>

            {/* Price & Type */}
            <Box className="flex w-full px-7 pt-3 border-t-[1px] border-gray-300 items-center justify-around sm:justify-between">
              <Box className="flex items-center gap-1">
                <Button className="w-[135px] h-[60px] text-xl rounded-full text-white font-bold bg-green-600">
                  <span className="text-[22px] mr-1">$</span>
                  {property.price}
                </Button>
                <Text>/sqft</Text>
              </Box>
              <Text className="text-[18px] text-black font-semibold">{property.type}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Properties;
