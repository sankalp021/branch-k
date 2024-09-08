import React from 'react';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#81D8D0]">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#81D8D0]">
              <FaYoutube size={24} />
            </a>
          </div>
          <div className="mt-2 text-center md:text-left">Branch Karma</div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
          <a href="/company" className="hover:text-[#81D8D0]">Company</a>
          <a href="/careers" className="hover:text-[#81D8D0]">Careers</a>
          <a href="/contact" className="hover:text-[#81D8D0]">Contact</a>
          <a href="/suppliers" className="hover:text-[#81D8D0]">Suppliers</a>
          <a href="/industries" className="hover:text-[#81D8D0]">Industries</a>
          <a href="/holdings" className="hover:text-[#81D8D0]">Holdings</a>
          <a href="/philanthropy" className="hover:text-[#81D8D0]">Philanthropy</a>
        </div>
        <div className="text-center md:text-right">
          <div>© 2024 Branch Karma Inc.</div>
          <div className="space-x-4">
            <a href="/manage-cookies" className="hover:text-[#81D8D0]">Manage cookies</a>
            <a href="/legal" className="hover:text-[#81D8D0]">Legal</a>
            <a href="/privacy" className="hover:text-[#81D8D0]">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
