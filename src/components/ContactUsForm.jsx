// src/components/ContactUsForm.jsx

import React, { useEffect } from 'react';

const ContactUsForm = () => {
  useEffect(() => {
    console.log('Mounting script');
    const script = document.createElement('script');
    script.src = 'https://bk.branchkarma.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      console.log('Script loaded');
    };
    return () => {
      console.log('Unmounting script');
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://bk.branchkarma.com/widget/form/n4rI9vypyD6snnfc047S"
      className="w-[100%] h-[521px] border-none  rounded-lg"
      id="inline-n4rI9vypyD6snnfc047S"
      title="Contact Us"
    ></iframe>
  );
};

export default ContactUsForm;
