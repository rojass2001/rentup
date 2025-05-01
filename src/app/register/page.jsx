"use client"; // Ensures the component runs on the client side in Next.js (App Router)

import { FaLock } from 'react-icons/fa6'; // Importing lock icon for password input
import { MdEmail } from 'react-icons/md'; // Importing email icon for email input
import Link from 'next/link'; // Importing Link to navigate to login page

// Custom hooks for handling form input and registration logic
import useAuthentication from '../customhooks/useauth';
import useInput from '../customhooks/useInput';

// Reusable UI components
import Form from '../../Components/Form';
import Box from '../../Components/Box';
import Button from '../../Components/Button';
import Text from '../../Components/Text';

// Class for styling input fields with border and background
const inputContainerClass = "w-full px-2 border-[1px] border-green-500 flex items-center bg-gray-100";

function Register() {
  // State management for email and password input fields using custom hook
  const [values, handleChange] = useInput( { email: "", password: ""} );

  // Registration submit function from the custom hook
  const { registerSubmit } = useAuthentication(values.email, values.password);

  return (
    <Box className="w-full h-screen flex px-3 items-center place-content-center">
      {/* Registration Form */}
      <Form
        className="w-full md:w-[50%] lg:w-[26%] border-2 py-3 border-green-500 px-2 pb-4 min-h-[300px] sm:h-auto flex items-center flex-col space-y-6 shadow-md bg-white rounded-3xl shadow-gray-300"
        onSubmit={registerSubmit} // Handle submit using custom hook logic
      >
        {/* Form Header */}
        <Text className="font-bold text-green-400 text-3xl">Sign up</Text>

        {/* Email input field */}
        <Box className={inputContainerClass}>
          <MdEmail />
          <input
            required
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="outline-none w-full h-12 pl-2 bg-gray-100"
          />
        </Box>

        {/* Password input field */}
        <Box className={inputContainerClass}>
          <FaLock />
          <input
            required
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="outline-none w-full h-12 pl-2 bg-gray-100"
          />
        </Box>

        {/* Link to Login page if the user already has an account */}
        <Link href="/login" className="text-sm underline">
          Already have an account? Please login.
        </Link>

        {/* Register button to submit the form */}
        <Button
          type="submit"
          className="bg-green-500 text-white rounded-xl w-[50%] py-2 font-bold"
        >
          Register
        </Button>
      </Form>
    </Box>
  );
}

export default Register;
