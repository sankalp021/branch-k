import React from 'react';
import backgroundImage from '../assets/bgcompany.jpg';
const Insights = () => {
  return (
    <div className="bg-black text-white p-8 min-h-screen">
      <div className="container mx-auto">
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
                        <h2 className="text-5xl font-bold mb-4">Insights</h2>
                        
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-center text-white mb-12"> Stay updated with the latest insights from Branch Karma. Our team shares valuable information on industry trends, company news, and innovative practices. 

                </h2>
      </div>
    </div>
  );
};

export default Insights;
