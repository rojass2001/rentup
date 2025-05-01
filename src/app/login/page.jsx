"use client"; // Enables client-side rendering in Next.js App Router

import { FaLock } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

// Custom hooks for handling form input and authentication
import useInput from '../customhooks/useInput';
import useAuthentication from '../customhooks/useauth';

// Reusable UI components
import Form from '../../Components/Form';
import Box from '../../Components/Box';
import Button from '../../Components/Button';
import Text from '../../Components/Text';

// Utility class for input containers
const inputContainerClass = "w-full px-2 border-[1px] border-green-500 flex items-center bg-gray-100";

function Login() {
  // useInput hook for managing form state
  const [values, handleChange] = useInput({ email: "", password: "" });

  // useAuthentication hook to handle login logic
  const { loginSubmit } = useAuthentication(values.email, values.password);

  return (
    <Box className="w-full h-screen flex px-3 items-center place-content-center">
      {/* Login Form */}
      <Form
        onSubmit={loginSubmit}
        className="w-full md:w-[50%] lg:w-[26%] border-2 border-green-500 px-2 py-3 pb-4 min-h-[300px] flex flex-col items-center space-y-6 bg-white shadow-md rounded-3xl shadow-gray-300"
      >
        {/* Title */}
        <Text className="font-bold text-green-400 text-3xl">Sign in</Text>

        {/* Email input field */}
        <Box className={inputContainerClass}>
          <MdEmail />
          <input
            required
            type="email"
            name="email"
            placeholder="Enter email"
            className="outline-none w-full h-12 pl-2 bg-gray-100"
            value={values.email}
            onChange={handleChange}
          />
        </Box>

        {/* Password input field */}
        <Box className={inputContainerClass}>
          <FaLock />
          <input
            required
            type="password"
            name="password"
            placeholder="Enter password"
            className="outline-none w-full h-12 pl-2 bg-gray-100"
            value={values.password}
            onChange={handleChange}
          />
        </Box>

        {/* Links for password reset and registration */}
        <Link className="text-sm underline" href="/forgotpassword">
          Forgot password?
        </Link>
        <Link className="underline text-sm" href="/register">
          Don't have an account? Please register.
        </Link>

        {/* Submit Button */}
        <Button
          type="submit"
          className="bg-green-500 text-white rounded-xl w-[50%] py-2 font-bold"
        >
          Login
        </Button>
      </Form>
    </Box>
  );
}

export default Login;
