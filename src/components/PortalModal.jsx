import React, { useState } from 'react';
import { FaLinkedin, FaYoutube, FaTwitter, FaGoogle, FaApple } from 'react-icons/fa';

const PortalModal = ({ closePortal }) => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-start pt-12 z-50">
      <div className="bg-black rounded-lg w-full max-w-lg p-6 shadow-lg relative mt-8 mx-4 border-2 border-white">
        <button onClick={closePortal} className="absolute top-2 right-2  font-bold">X</button>
        
        <div className="flex justify-center mb-4">
          <button 
            onClick={() => setIsSignUp(false)} 
            className={`py-2 px-4 ${!isSignUp ? 'border-b-2 border-[#81D8D0] text-[#81D8D0]' : 'text-gray-500'}`}
          >
            Log In
          </button>
          <button 
            onClick={() => setIsSignUp(true)} 
            className={`py-2 px-4 ${isSignUp ? 'border-b-2 border-[#81D8D0] text-[#81D8D0]' : 'text-gray-500'}`}
          >
            Join Us
          </button>
        </div>

        {isSignUp ? (
          <>
            <h2 className="text-2xl mb-4 font-semibold  text-center">Join Branch Karma</h2>
            <form className="space-y-4">
              
              <input type="text" placeholder="First name" required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#81D8D0]" />
              <input type="text" placeholder="Last name" required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#81D8D0]" />
              <input type="email" placeholder="Email" required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#81D8D0]" /><input type="password" placeholder="Password" required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#81D8D0]" />
              <input type="password" placeholder="Re-enter password" required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#81D8D0]" />
              <div className="space-x-4 flex justify-center">
                <button className="btn1">Join Us</button>
              </div>
            </form>
            <div className="my-4 text-center">
              <p className="text-sm ">or</p>
              <div className="flex justify-center space-x-4 mt-2">
                <FaLinkedin className=" cursor-pointer hover:text-[#81D8D0]" size={24} />
                <FaGoogle className=" cursor-pointer hover:text-[#81D8D0]" size={24} />
                <FaApple className=" cursor-pointer hover:text-[#81D8D0]" size={24} />
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl mb-4 font-semibold  text-center">Welcome Back</h2>
            <form className="space-y-4">
              <input type="email" placeholder="Email" required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#81D8D0]" />
              <input type="password" placeholder="Password" required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#81D8D0]" />
              <div className="flex items-center ">
                <input type="checkbox" className="mr-2" />
                <span>Keep me logged in</span>
              </div>
              <div className="space-x-4 flex justify-center">
                <button className="btn1">Log In</button>
              </div>
            </form>
            <div className="my-4 text-center">
              <p className="text-sm ">or</p>
              <div className="flex justify-center space-x-4 mt-2">
                <FaLinkedin className=" cursor-pointer hover:text-[#81D8D0]" size={24} />
                <FaGoogle className=" cursor-pointer hover:text-[#81D8D0]" size={24} />
                <FaApple className=" cursor-pointer hover:text-[#81D8D0]" size={24} />
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm ">Still not a member? <span onClick={handleToggle} className="text-[#81D8D0] cursor-pointer">Join Branch Karma</span></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PortalModal;
