import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import './CubeSlider.css';
import backgroundImage from '../assets/bgcompany.jpg'; // Update with your image path
import missionBackground from '../assets/bgms.jpg'; // Update with your mission statement image path
import { Headset, Film, ShoppingCart } from 'lucide-react';

const Company = () => {
  return (
    <div className="bg-black text-white p-8 min-h-screen">
      <div className="container mx-0">
        <div
          className="relative mb-8 flex items-center  "
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
          <div className="absolute inset-0 bg-black opacity-60"></div> {/* Darker overlay */}
          <div className="relative z-10 p-4 text-left">
            <div className="border-t-4 border-[#81D8D0] w-20 mb-4"></div> {/* Horizontal line */}
            <h2 className="text-5xl font-bold mb-8">Your Trusted Partner.</h2>
            <p className="text-2xl leading-relaxed items-end ">
              
            </p>
          </div>
        </div>
        
        <div className="bg-black text-white p-8 mt-12">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:w-1/3">
              <h3 className="text-3xl font-bold text-center mb-6">Who Are We</h3>
            </div>
            
            <div className="flex flex-col md:w-5/6">
              {/* <h2 className="text-5xl font-bold mb-4 text-center">Heading</h2> */}
              <p className="text-xl leading-relaxed  mb-12">
              Branch Karma International is a group of brands committed to excellence, innovation, and sustainable growth. Currently we primarily serve in India, Mexico, and the United States of America. Our diverse portfolio encompasses a wide range of industries. The sectors we proudly serve are technology, finance, construction, consulting, education, and consumer goods. We aim to be a key player in driving economic advancement and technological innovation worldwide.
              </p>
              
              <hr className="border-t border-gray-600 my-5" />
        <div className="flex justify-center  relative">
          <div className="text-center">
            <Headset size={48} className="mx-auto text-[#81D8D0]" />
            <h4 className="text-xl font-semibold mt-4">Consulting</h4>
            <p className="text-lg p-3 leading-relaxed">Bringing innovative solutions to the heart of your business.</p>
          </div>

          <div className="text-center relative">
            <div className="border-l-2 border-gray-600 absolute left-0  top-0 h-full"></div>
            <Film size={48} className="mx-auto text-[#81D8D0]" />
            <h4 className="text-xl font-semibold mt-4">Media</h4>
            <p className="text-lg p-3 leading-relaxed">Deep and strategic insights and experience across media and content business.</p>
          </div>

          <div className="text-center relative">
            <div className="border-l-2 border-gray-600 absolute left-0 top-0 h-full"></div>
            <ShoppingCart size={48} className="mx-auto text-[#81D8D0]" />
            <h4 className="text-xl  font-semibold mt-4">Consumer Goods</h4>
            <p className="text-lg p-3 leading-relaxed">Building strong relationships between the consumers and the manufacturers.</p>
          </div>
        </div>
            </div>
          </div>
        </div>

        <div
          className="relative text-center mb-8 p-12 flex items-center justify-center"
          style={{
            backgroundImage: `url(${missionBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            width: '100%',
            height: '430px',
            position: 'relative',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div> {/* Darker overlay */}
          <div className="relative z-10 max-w-3xl p-4 ">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-[#81D8D0] text-9xl leading-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="110" height="110">
                  <path fill="#81D8D0"d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
            {/* <h2 className="text-4xl font-bold mb-4">Mission Statement</h2> */}
            <div className="relative mb-8">
              
              <blockquote className="text-3xl text-bold text-center leading-relaxed">
                Exceptional returns through strategic investments, operational excellence, and sustainable growth.
              </blockquote>
              <cite className="block text-center text-white"></cite>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mt-12">
          <div className="md:w-1/3">
            <h3 className="text-3xl font-bold text-center mb-6">Core Values</h3>
          </div>
          
          <div className="flex flex-col md:w-2/3">
            <p className="text-lg leading-relaxed text-left p-3 mb-12">
            At Branch Karma, we believe in the strength of collaboration and diversity. Our team of dedicated professionals brings together a wealth of experience, expertise, and cultural perspectives, enabling us to tackle complex challenges and deliver cutting-edge solutions. Our commitment to innovation is at the heart of everything we do, as we continuously invest in research and development to stay at the forefront of industry trends and emerging technologies.
<br/>
<br/>
Sustainability and social responsibility are fundamental to our business philosophy. We are dedicated to creating a positive impact on society and the environment, implementing sustainable practices across our operations and supporting community initiatives that promote education, health, and well-being.
<br/>
<br/>

Our teamwork is built on a foundation of strong values, including integrity, excellence, and respect. We remain committed to driving growth, delivering value to our stakeholders, and shaping a better future for generations to come. We will always continue to expand our horizons, innovate for a sustainable future, and make a lasting impact on the world.
<br/>
            </p>
          </div>
        </div>
        <div className="mt-12">
          {/* <h3 className="text-3xl font-bold mb-6 text-center">Our Services</h3>
          <div className="cube-slider-container">
            <AwesomeSlider animation="cubeAnimation">
              <div className="slide">
                <img src="/images/technology.jpg" alt="Technology" className="slide-image" />
                <p className="slide-text">Technology</p>
              </div>
              <div className="slide">
                <img src="/images/finance.jpg" alt="Finance" className="slide-image" />
                <div className="slide-text-container">
                  <p className="slide-text">Construction</p>
                </div>
              </div>
              <div className="slide">
                <img src="/images/consulting.jpg" alt="Consulting" className="slide-image" />
                <div className="slide-text-container">
                  <p className="slide-text">Consulting</p>
                </div>
              </div>
              <div className="slide">
                <img src="/images/education.jpg" alt="Education" className="slide-image" />
                <div className="slide-text-container">
                  <p className="slide-text">Education</p>
                </div>
              </div>
            </AwesomeSlider>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Company;
