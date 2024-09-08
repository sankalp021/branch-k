import React from 'react';
import placeholderImage from '../assets/placeholder.jpg'; // Ensure you have a placeholder image in the assets
import { ClipboardList, CheckCircle, Calendar, FileText, DollarSign, Users } from 'lucide-react';
import backgroundImage from '../assets/bgcr.jpg';
import { Link } from 'react-router-dom';

const Careers = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <section className="container mx-auto py-8">
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
                    <div className="absolute inset-0 bg-black opacity-60"></div> {/* Darker overlay */}
                    <div className="relative z-10 p-4 text-left ">
                        <div className="border-t-4 border-[#81D8D0] w-20 mb-4"></div> {/* Horizontal line */}
                        <h2 className="text-5xl font-bold mb-4">Careers at Branch Karma</h2>
                        <p className="text-2xl leading-relaxed">
                            Join Us. From Anywhere.
                        </p>
                    </div>
                </div>
                
               
                <div className="mb-8 flex">
        <div className="w-1/2 p-8 text-right relative">
          <blockquote className="text-xl text-center bolds mb-4">
            "The only way to do great work is to love what you do."
          </blockquote>
          <cite className="block text-white">-Steve Jobs</cite>
        </div>
        <div className="w-1/2 p-8 text-left relative">
          <div className="absolute border-r-2 border-[#81D8D0] inset-y-0 left-0 w-px bg-[#81D8D0]"></div> {/* Thin line separator */}
          <h2 className="text-3xl font-bold mb-4">Let's Team Up</h2>
          <p className="mt-2">
            We believe in the power of collaboration and teamwork. Together, we can achieve great things and drive innovation across all sectors. Join us and be a part of a dynamic and inclusive team that values your unique skills and perspectives. Let's make a difference together.
          </p>
        </div>
      </div>

      <div className="flex space-x-4 mb-6 justify-center">
        <Link to="/Company" className="btn1">
          Learn More
        </Link>
        <a href="https://bk.branchkarma.com/widget/form/ISSfTxCjkXTlxOPwVI0E" target="_blank" rel="noopener noreferrer">
          <button className="btn2">
            Join Us
          </button>
        </a>
      </div>

      <hr className="border-t border-gray-600 my-8" />
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Application Process</h2>
                    <div className="relative">
                        <div className="flex flex-col items-center space-y-8">
                            <div className="flex items-center w-full">
                                <div className="w-1/2 text-right pr-8">
                                    <h3 className="text-xl font-semibold">Fill Out Form</h3>
                                    <p className="mt-2 text-base">Submit your application through our online form.</p>
                                </div>
                                <div className="w-auto flex items-center justify-center relative">
                                    <div className="bg-gray-700 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out hover:bg-gray-900">
                                        <ClipboardList size={24} color="#81D8D0" />
                                    </div>
                                </div>
                                <div className="w-1/2 pl-8"></div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="w-1/2"></div>
                                <div className="w-auto flex items-center justify-center relative">
                                    <div className="bg-gray-700 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out hover:bg-gray-900">
                                        <CheckCircle size={24} color="#81D8D0" />
                                    </div>
                                </div>
                                <div className="w-1/2 text-left pl-8">
                                    <h3 className="text-xl font-semibold">CV Review</h3>
                                    <p className="mt-2 text-base">Our team reviews your CV to match your skills with our requirements.</p>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="w-1/2 text-right pr-8">
                                    <h3 className="text-xl font-semibold">Schedule Interview</h3>
                                    <p className="mt-2 text-base">We schedule an interview to get to know you better.</p>
                                </div>
                                <div className="w-auto flex items-center justify-center relative">
                                    <div className="bg-gray-700 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out hover:bg-gray-900">
                                        <Calendar size={24} color="#81D8D0" />
                                    </div>
                                </div>
                                <div className="w-1/2 pl-8"></div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="w-1/2"></div>
                                <div className="w-auto flex items-center justify-center relative">
                                    <div className="bg-gray-700 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out hover:bg-gray-900">
                                        <FileText size={24} color="#81D8D0" />
                                    </div>
                                </div>
                                <div className="w-1/2 text-left pl-8">
                                    <h3 className="text-xl font-semibold">Practical Assessment Engagement</h3>
                                    <p className="mt-2 text-base">Engage in a practical assessment to showcase your skills.</p>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="w-1/2 text-right pr-8">
                                    <h3 className="text-xl font-semibold">Process Offer</h3>
                                    <p className="mt-2 text-base">Receive and review your offer to join our team.</p>
                                </div>
                                <div className="w-auto flex items-center justify-center relative">
                                    <div className="bg-gray-700 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out hover:bg-gray-900">
                                        <DollarSign size={24} color="#81D8D0" />
                                    </div>
                                </div>
                                <div className="w-1/2 pl-8"></div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="w-1/2"></div>
                                <div className="w-auto flex items-center justify-center relative">
                                    <div className="bg-gray-700 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out hover:bg-gray-900">
                                        <Users size={24} color="#81D8D0" />
                                    </div>
                                </div>
                                <div className="w-1/2 text-left pl-8">
                                    <h3 className="text-xl font-semibold">Onboarding And Department Placement</h3>
                                    <p className="mt-2 text-base">Start your journey with us through our onboarding program.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-gray-600 my-8" />
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">How We Work</h1>
                </div>
                
                <div className="flex justify-between items-start mb-10 relative">
    <div className="w-1/2 pr-8 text-right">
        <h2 className="text-2xl font-semibold">Learning Versatility</h2>
        <p className="mt-4">
            {/* Placeholder content for Branch Karma International */}
            As a multinational organisation operating in multiple countries across diverse industries, including technology, healthcare, finance, energy, and manufacturing, we offer a wide range of career opportunities. Whether you're a seasoned professional or a recent graduate, you'll find a world of possibilities to explore, from research and development to marketing, management, and beyond.
        </p>
    </div>
    <div className="border-r-2 border-[#81D8D0] h-full absolute left-1/2 top-0 transform -translate-x-1/2"></div> {/* Visible vertical line */}
    <div className="w-1/2 pl-8 text-left">
        <h2 className="text-2xl font-semibold">Freedom And Flexibility</h2>
        <p className="mt-4">
            {/* Placeholder content for Branch Karma Ltd */}
            Join our global team and embark on a journey of growth, innovation, and excellence. At Branch Karma, we believe that our team is the cornerstone of our success, and we are committed to fostering a dynamic and inclusive work environment where every individual can thrive.
        </p>
    </div>
</div>

                
                <hr className="border-t border-gray-600 my-8" />
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Benefits</h2>
                    <p className="mt-4 text-center">
                            {/* Placeholder content for Branch Karma Ltd */}
                            We are looking for passionate, talented, and driven individuals who are eager to make a positive impact and contribute to our mission of shaping a better future. In return, we offer competitive compensation packages, comprehensive benefits, and numerous professional development programs designed to help you grow both personally and professionally.

                        </p>
                        <p className="mt-4 text-center">
                            {/* Placeholder content for Branch Karma International */}
                            At Branch Karma, diversity is our strength. We celebrate and respect the unique perspectives and backgrounds of our global workforce and are committed to promoting equality and inclusion in all aspects of our business.


                        </p> <br/>

                    <div className="flex flex-col md:flex-row justify-center">
                        <ul className="list-disc list-inside mx-0 mb-4 md:mb-0">
                            <li className="pl-4">Unlimited Growth - We pay for any learning material such as books, courses, and extended education.</li>
                            <li className="pl-4">Virtual network - Work and connect globally. You can work from anywhere including your home or at one of our global offices.</li>
                            <li className="pl-4">24 hours flexibility - Our 24/7 operations in multiple time zones allow you to have your preferred schedule.</li>
                        </ul>
                        <ul className="list-disc list-inside mx-4">
                            <li className="pl-4">Internal Promotions - Existing team members get priorities for new projects and growth opportunities.</li>
                            <li className="pl-4">Perks - Insurance, stock options, and retirement planning. Making sure you are covered with wellness that extends beyond.</li>
                            <li className="pl-4">Culture - We have active team building activities to integrate trust and leadership.</li>
                            <li className="pl-4">Paid time off - We all need a break sometimes.</li>
                        </ul>
                    </div>
                    <h2 className="text-2xl font-semibold"></h2>
                       
                </div>



               

                {/* New Section */}
                
            </section>
        </div>
    );
}

export default Careers;
