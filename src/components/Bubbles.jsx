import React from 'react';
import backgroundImage from '../assets/bgcompany.jpg';

const industriesData = [
  { title: "Construction", description: "From foundation to finish, we deliver quality construction." },
  { title: "Consulting", description: "Empowering your business with tailored consulting services." },
  { title: "Asset Management", description: "Protecting and growing your investment with precision." },
  { title: "Angel Investing", description: "Your gateway to high potential startup investments." },
  { title: "Agriculture", description: "Nurturing the future of farming with advanced technology." },
  { title: "Consumer Goods", description: "Innovative products designed to enhance your lifestle." },
  { title: "Technology", description: "Revolutionizing your world with advanced tech solutions." },
 
  // Add more industries as needed
];

const Industries = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div
                    className="relative mb-8 flex items-center"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '8px',
                        width: '100%',
                        height: '430px', // Increased height
                        position: 'relative',
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Darker overlay */}
                    <div className="relative z-10 p-4 flex flex-col justify-end items-start ">
                        <div className="border-t-4 border-[#81D8D0] w-20 mb-4"></div> {/* Horizontal line */}
                        <h2 className="text-5xl font-bold mb-4">We operate in 35+ industries.</h2>
                        <p className="text-lg leading-relaxed">
                       
                        </p>
                    </div>
                </div>
      {/* <h1 className="text-3xl font-bold text-center text-white mb-8">Industries</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {industriesData.map((industry, index) => (
        <div
          key={index}
          className="group bg-black border-2 border-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[#81D8D0]"
        >
          <h2 className="text-xl font-bold text-white mb-2 text-center group-hover:text-black">{industry.title}</h2>
          <p className="text-sm text-gray-300 text-center group-hover:text-black">{industry.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Industries;
