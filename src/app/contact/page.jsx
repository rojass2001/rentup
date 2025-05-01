"use client"
import Box from "@/Components/Box"
import Button from "@/Components/Button"
import Form from "@/Components/Form"
import Pageheading from "@/Components/Pageheading"
import Text from "@/Components/Text"
import useAuthentication from "../customhooks/useauth"

function Contact() {
  const{contactSubmit}=useAuthentication()
  return (
  <Box className="w-full">
  <Pageheading mainhead="Contact Us" subhead="Get Helps & Friendly Support" />

  <Form
    className="w-full bg-white py-20 px-2 md:px-12"
    onSubmit={contactSubmit}
  >
    <Box className="w-full space-y-6 bg-white shadow-md shadow-gray-400 py-12 px-4 md:px-[100px]">
      <Text className="text-[24px] font-bold mb-5 text-center md:text-start">
        Fill Up The Form
      </Text>

      {/* Name and Email */}
      <Box className="flex flex-col md:flex-row gap-6">
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="w-full md:w-[60%] h-10 font-bold border border-gray-600 outline-none px-3"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full md:w-[60%] h-10 font-bold border border-gray-600 outline-none px-3"
        />
      </Box>

      {/* Subject */}
      <input
        type="text"
        name="subject"
        required
        placeholder="Subject"
        className="w-full h-10 font-bold border border-gray-600 outline-none px-3"
      />

      {/* Message */}
      <textarea
        name="message"
        required
        placeholder="Write your message here..."
        className="w-full h-32 mt-4 border border-gray-600 outline-none px-3 py-2"
      />

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full md:w-auto h-14 mt-4 bg-green-500 text-white font-bold rounded-lg px-6 text-center"
      >
        Submit Request
      </Button>
    </Box>
  </Form>
</Box>

  )
}
export default Contact
