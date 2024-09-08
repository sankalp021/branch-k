import React, { useEffect, useRef } from 'react';
import map from "../assets/world-map-small.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const textElement = useRef(null);

  useEffect(() => {
    const words = ["Out.", "Beyond.", "Karma."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseDuration = 1500;

    const type = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        textElement.current.innerHTML = `Branch<span class="typed-text">${currentWord.substring(0, charIndex + 1)}</span>`;
        charIndex++;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, pauseDuration);
          return;
        }
      } else {
        textElement.current.innerHTML = `Branch<span class="typed-text">${currentWord.substring(0, charIndex)}</span>`;
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    };

    type();
  }, []);

  return (
    <div className="flex flex-col items-start mt-6 lg:mt-20 ml-4 lg:ml-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col lg:items-start lg:mr-12 mb-6">
          <h1 className="text-xl sm:text-6xl lg:text-7xl text-center lg:text-left tracking-wide mb-6">
            Grow Your Company.
          </h1>
          <div className="flex space-x-4 mb-6">
            <Link to="/company" className="btn1">
              Learn More
            </Link>
            <Link to="/contactUs" className="btn1">
              Contact Us
            </Link>
          </div>
          <div className="mt-6 text-4xl font-bold flex justify-start items-center h-32">
            <span ref={textElement}></span>
          </div>
        </div>
        <div className="w-full max-w-screen-lg md:max-w-full overflow-hidden">
          <img className="w-full" src={map} alt="World Map" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
