"use client";
import Box from "../Box";
import Text from "../Text";
import { allsection, company, layouts } from "./Footerarray";

function Footer() {
  return (
    <footer className="w-full">
      <Box className="w-full grid py-5 px-3 gap-x-3 gap-y-10 text-white bg-slate-800 grid-cols-2 md:grid-cols-4 justify-center place-items-center">
        {/* First Column: Newsletter Signup */}
        <Box className="space-y-3 px-2 h-[300px]">
          <img
            className="w-[70%] h-9"
            src="https://funny-daffodil-350bc9.netlify.app/images/logo-light.png"
            alt="Logo"
          />
          <Text className="text-2xl text-white">Do You Need Help With Anything?</Text>
          <Text className="text-[17px]">
            Receive updates, hot deals, tutorials, and discounts sent straight to your inbox every month.
          </Text>
          <Box className="w-full flex">
            <input
              className="w-[70%] rounded-lg h-12"
              type="text"
              placeholder="Your email"
            />
            <button className="w-[50%] rounded-lg text-white bg-green-500 h-12">
              Subscribe
            </button>
          </Box>
        </Box>

        {/* Second Column: Layouts */}
        <Box className="space-y-3">
          <Text className="text-2xl text-white mb-7 font-bold">Layouts</Text>
          {layouts.map((layout, index) => (
            <Text className="text-[18px]" key={index}>
              {layout}
            </Text>
          ))}
        </Box>

        {/* Third Column: All Sections */}
        <Box className="space-y-3">
          <Text className="text-2xl text-white mb-7 font-bold">All Sections</Text>
          {allsection.map((section, index) => (
            <Text className="text-[18px]" key={index}>
              {section}
            </Text>
          ))}
        </Box>

        {/* Fourth Column: Company */}
        <Box className="space-y-3">
          <Text className="text-2xl text-white mb-7 font-bold">Company</Text>
          {company.map((comp, index) => (
            <Text className="text-[18px]" key={index}>
              {comp}
            </Text>
          ))}
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
