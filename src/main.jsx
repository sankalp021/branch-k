import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import './index.css';

// Import your components
import Navbar from './components/Navbar';


import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import HeroSection from './components/HeroSection';
import Company from './components/Company';
import Bubbles from './components/Bubbles';
import Holdings from './components/Holdings';
import Philanthropy from './components/Philanthropy';
import Suppliers from './components/suppliers';
import Insights from './components/Insights';
import Industries from './components/Bubbles';
import Footer from './components/Footer';

const AppLayout = () => (
  <div>
    <Navbar />
   
    <Outlet />
    <Footer/>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <HeroSection/> },
      { path: '/Company', element: <Company/> },
      { path: '/Bubbles', element: <Industries/> },
      { path: 'careers', element: <Careers /> },
      { path: 'ContactUs', element: <ContactUs /> },
      { path: 'Holdings', element: <Holdings/> },
      { path: '/Philanthropy', element: <Philanthropy/> },
      { path: 'Suppliers', element: <Suppliers/> },
      { path: 'Insights', element: <Insights/> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
