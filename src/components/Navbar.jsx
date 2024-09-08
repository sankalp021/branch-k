import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/bklogof.png";
import { Link } from "react-router-dom";
import PortalModal from './PortalModal';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [isPortalOpen, setIsPortalOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    const openPortal = () => {
        setMobileDrawerOpen(false);  // Ensure mobile drawer is closed
        setIsPortalOpen(true);
    };
    
    const closePortal = () => setIsPortalOpen(false);

    return (
        <nav className="sticky top-0 z-40 py-0 backdrop-blur-lg border-b border-neutral-700/80 bg-transparent">
            <div className="container px-4 mx-auto text-sm relative">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2 mt-2 ml-0" src={logo} alt="logo" />
                        <Link to="/" className="text-xl tracking-tight text-white">Branch Karma</Link>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-8'>
                        <li>
                            <Link to="/company" className="btn">Company</Link>
                        </li>
                        <li>
                            <Link to="/Careers" className="btn">Careers</Link>
                        </li>
                        <li>
                            <Link to="/ContactUs" className="btn">Contact </Link>
                        </li>
                        <li>
                            <Link to="/Suppliers" className="btn">Suppliers</Link>
                        </li>
                        <li>
                            <Link to="/Bubbles" className="btn">Industries</Link>
                        </li>
                        <li>
                            <Link to="/Holdings" className="btn">Holdings</Link>
                        </li>
                        <li>
                            <Link to="/Philanthropy" className="btn">Philanthropy</Link>
                        </li>
                        <li>
                            <Link to="/Insights" className="btn">Insights</Link>
                        </li>
                        <li>
                            <button onClick={openPortal} className="btn">Portal</button>
                        </li>
                    </ul>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar} className="text-xl text-white focus:outline-none">
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-50 bg-opacity-900 bg-neutral-900 w-full p-12 flex flex-col justify-start items-center lg:hidden">
                        <ul className="space-y-4 text-center w-full">
                            <li>
                                <Link to="/company" className="btn" onClick={toggleNavbar}>Company</Link>
                            </li>
                            <li>
                                <Link to="/Careers" className="btn" onClick={toggleNavbar}>Careers</Link>
                            </li>
                            <li>
                                <Link to="/ContactUs" className="btn" onClick={toggleNavbar}>Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/Suppliers" className="btn" onClick={toggleNavbar}>Suppliers</Link>
                            </li>
                            <li>
                                <Link to="/Bubbles" className="btn" onClick={toggleNavbar}>Industries</Link>
                            </li>
                            <li>
                                <Link to="/Holdings" className="btn" onClick={toggleNavbar}>Holdings</Link>
                            </li>
                            <li>
                                <Link to="/Philanthropy" className="btn" onClick={toggleNavbar}>Philanthropy</Link>
                            </li>
                            <li>
                                <Link to="/Insights" className="btn" onClick={toggleNavbar}>Insights</Link>
                            </li>
                            <li>
                                <button onClick={openPortal} className="btn">Portal</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            {isPortalOpen && <PortalModal closePortal={closePortal} />}
        </nav>
    );
}

export default Navbar;
