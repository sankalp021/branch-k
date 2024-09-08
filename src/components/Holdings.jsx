import React from 'react';
import backgroundImage from '../assets/bgh.jpg';

const investments = [
  { name: 'Uber', description: 'Ridesharing app', imageUrl: '/path/to/uber.jpg' },
  { name: 'Calm', description: 'Meditation app', imageUrl: '/path/to/calm.jpg' },
  { name: 'Robinhood', description: 'Stock trading app', imageUrl: '/path/to/robinhood.jpg' },
  { name: 'Steezy', description: 'Dance tutorial app', imageUrl: '/path/to/steezy.jpg' },
  { name: 'Thumbstack', description: 'Service provider marketplace', imageUrl: '/path/to/thumbstack.jpg' },
  { name: 'Eight Sleep', description: 'Smart mattress', imageUrl: '/path/to/eightsleep.jpg' },
  // Add more investments as needed
];

const Holdings = () => {
  return (
    <div className="py-12 mx-auto bg-black">
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
                    <div className="absolute inset-0 bg-black opacity-30"></div> {/* Darker overlay */}
                    <div className="relative z-10 p-4 flex flex-col justify-end items-start ">
                        <div className="border-t-4 border-[#81D8D0] w-20 mb-4"></div> {/* Horizontal line */}
                        <h2 className="text-5xl font-bold mb-4">Our Ventures and Affiliations</h2>
                        {/* <p className="text-lg leading-relaxed">
                        Partners are a valuable pillar to our network. We follow the Toyota way.
                        </p> */}
                    </div>
                </div>
                </div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Previous Investments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investments.map((investment, index) => (
            <div key={index} className="group bg-black border-2 border-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[#81D8D0]">
              <img src={investment.imageUrl} alt={investment.name} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-black">{investment.name}</h3>
                <p className="text-gray-400 group-hover:text-black">{investment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Holdings;
