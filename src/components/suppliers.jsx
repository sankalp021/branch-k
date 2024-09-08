import React from 'react';
import backgroundImage from '../assets/bgh.jpg';
import ContactUsForm from '../components/ContactUsForm';
const Suppliers = () => {
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
                        <h2 className="text-5xl font-bold mb-4">Our Partners</h2>
                        <p className="text-2xl leading-relaxed">
                        Partners are a valuable pillar to our network. We follow the Toyota way.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between mt-12">
          <div className="md:w-1/3">
            <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
            <p>If you are an established supplier and would like to work with us please reach out to see where we can best work together</p>
          </div>
          
          <div className="flex flex-col md:w-2/3">
            <p className="text-lg leading-relaxed text-center mb-12">
            <ContactUsForm />

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
