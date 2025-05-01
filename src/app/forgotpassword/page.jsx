"use client"; // Ensures this component is rendered on the client side (Next.js requirement for hooks and interactivity)

import React from 'react';
import { MdEmail } from 'react-icons/md'; // Email icon
import useInput from '../customhooks/useInput'; // Custom hook for handling form input state
import useAuthentication from '../customhooks/useauth'; // Custom authentication hook that includes resetEmail function
import Form from '../../Components/Form'; // Custom form wrapper component
import Box from '../../Components/Box'; // Custom container component (acts like a div with styling)
import Button from '../../Components/Button'; // Custom button component
import Text from '../../Components/Text'; // Custom text/heading component

// Styling for input container box
const inputcontainer = "w-full px-2 border-[1px] border-green-500 flex items-center bg-gray-100";

function Forgotpassword() {
  // Form state for the email input
  const [values, handleChange] = useInput({ email: "" });

  // Custom hook to get resetEmail function, passed the entered email
  const { resetEmail } = useAuthentication(values.email);

  return (
    // Centered container for the form
    <Box className="w-full h-screen flex px-2 items-center place-content-center">
      
      {/* Forgot password form with styling */}
      <Form 
        className="w-full md:w-[50%] border-2 py-3 place-content-center border-green-500 lg:w-[26%] px-2 pb-4 min-h-[300px] flex items-center flex-col space-y-6 shadow-md bg-white rounded-3xl shadow-gray-300" 
        onSubmit={resetEmail} // Trigger password reset email
      >
        {/* Title */}
        <Text className="text-2xl text-green-500 font-bold">Reset Password</Text>
        
        {/* Email input field */}
        <Box className={inputcontainer}>
          <MdEmail />
          <input 
            className="outline-none w-full h-12 pl-2 bg-gray-100" 
            type="email" 
            name="email" 
            onChange={handleChange} 
            value={values.email} 
            placeholder="Enter your registered email" 
            required
          />
        </Box>

        {/* Submit button to send reset link */}
        <Button 
          type="submit" 
          className="bg-green-500 text-white rounded-xl w-[50%] py-2 font-bold"
        >
          Send Link
        </Button>
      </Form>
    </Box>
  );
}

export default Forgotpassword;
