import React from 'react';
import backgroundImage from '../assets/bgcompany.jpg';
import { Link } from 'react-router-dom';

const philanthropicInitiatives = [
  { name: 'Education for All', description: 'Providing education to underprivileged children.', imageUrl: '/images/edu.jpg' },
  { name: 'Health & Wellness', description: 'Improving health facilities in rural areas.', imageUrl: '/images/docs.jpg' },
  { name: 'Clean Water', description: 'Ensuring access to clean water in developing regions.', imageUrl: '/images/water.jpg' },
  { name: 'Green Earth', description: 'Planting trees and promoting environmental sustainability.', imageUrl: '/images/green.jpg' },
  { name: 'Women Empowerment', description: 'Empowering women through skill development programs.', imageUrl: '/images/lady.jpg' },
  { name: 'Disaster Relief', description: 'Providing immediate assistance in disaster-hit areas.', imageUrl: '/images/relief.jpg' },
  
];

const Philanthropy = () => {
  return (
    <div className="py-12 bg-black">
      <div className="container mx-auto px-4">
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
                        <h2 className="text-5xl font-bold mb-4">Philanthropy</h2>
                        <p className="text-lg leading-relaxed">
                         

                        </p>
                    </div>
                </div>
        <h2 className="text-3xl font-bold text-center text-white mb-12">                        Some of the community projects we have created,<br/> contributed, or actively volunteer. 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philanthropicInitiatives.map((initiative, index) => (
            <div key={index} className="group bg-black border-2 border-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[#81D8D0]">
              <img src={initiative.imageUrl} alt={initiative.name} className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-black">{initiative.name}</h3>
                <p className="text-gray-400 group-hover:text-black">{initiative.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex space-x-4 mt-8 mb-6 justify-center">
        <Link to="/ContactUs" className="btn1">
          Ready To Make A Change
        </Link>
        
      </div>
      </div>
    </div>
  );
};

export default Philanthropy;
