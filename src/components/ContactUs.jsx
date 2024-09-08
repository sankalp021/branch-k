import React from 'react';
import { MapPin, Phone, Globe } from 'lucide-react';
import backgroundImage from '../assets/bgcompany.jpg';
import ContactUsForm from '../components/ContactUsForm';

const ContactUs = () => {
  const contacts = [
    {
      title: "United States of America: Global Headquarters",
      address: "Atlanta, Georgia - 30033",
      phone: " +1 (888) 888 8888",
      website: "www.branchkarma.com"
    },
    {
      title: "Mexico",
      address: "Mexico city - 01000",
      phone: " +81 (999) 999 9999",
      
      website: "www.branchkarma.com"
    },
    {
      title: "India",
      address: "Mumbai - 400001",
      phone: " +91 (777) 777 7777",
      website: "wwww.branchkarma.com"
    }
  ];

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
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Darker overlay */}
        <div className="relative z-10 p-4 flex flex-col justify-end items-start ">
          <div className="border-t-4 border-[#81D8D0] w-20 mb-4"></div> {/* Horizontal line */}
          <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg leading-relaxed">
            {/* Additional content can go here */}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="relative bg-black border border-white text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-[#81D8D0] hover:text-black w-full h-40 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
              <div className="flex items-start mb-2">
                <MapPin className="mr-2" />
                <p>{contact.address}</p>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="mr-2" />
                <p>{contact.phone}</p>
              </div>
              {contact.fax && (
                <div className="flex items-center mb-2">
                  <Phone className="mr-2" />
                  <p>{contact.fax}</p>
                </div>
              )}
            </div>
            <div className="flex items-center">
              <Globe className="mr-2" />
              <a href={`https://${contact.website}`} className="text-blue-500 hover:underline">{contact.website}</a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row md:justify-between mt-12">
          <div className="md:w-1/3">
            <h3 className="text-3xl mt-8 font-bold mb-6">Write To Us</h3>
          </div>
          
          <div className="flex flex-col md:w-2/3">
            <p className="text-lg leading-relaxed text-center mb-12">
            <ContactUsForm />

            </p>
          </div>
        </div>
    </div>
  );
}

export default ContactUs;
