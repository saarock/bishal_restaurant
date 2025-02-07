import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* nav start */}
      <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-1 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/">
              <img src="./images/logo_1.png" alt="logo" height="130" width="100" />
            </NavLink>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-8 text-lg font-medium main-menu">
            <NavLink
              to="/"
              className="hover:text-yellow-400 transition-all px-3 py-2 rounded-lg"
              activeClassName="text-yellow-400" // Active link style
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className="hover:text-yellow-400 transition-all px-3 py-2 rounded-lg"
              activeClassName="text-yellow-400"
            >
              Menu
            </NavLink>
            <NavLink
              to="#gallery"
              className="hover:text-yellow-400 transition-all px-3 py-2 rounded-lg"
              activeClassName="text-yellow-400"
            >
              Gallery
            </NavLink>
            <NavLink
              to="#contact"
              className="hover:text-yellow-400 transition-all px-3 py-2 rounded-lg"
              activeClassName="text-yellow-400"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col items-center py-4 space-y-4 bg-yellow-600 text-white`}>
          <NavLink
            to="/"
            className="hover:text-yellow-400 transition-all px-3 py-2 rounded-lg"
            activeClassName="text-yellow-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className="hover:text-yellow-400 transition-all px-3 py-2 rounded-lg"
            activeClassName="text-yellow-400"
          >
            Menu
          </NavLink>
          <NavLink
            to="#gallery"
            className="hover:text-yellow-400 transition-all px-3 py-2 rounded-lg"
            activeClassName="text-yellow-400"
          >
            Gallery
          </NavLink>
          <NavLink
            to="#contact"
            className="hover:text-yellow-400 transition-all px-3 py-2 rounded-lg"
            activeClassName="text-yellow-400"
          >
            Contact
          </NavLink>
        </div>
      </nav>
      {/* nav end */}
    </>
  );
};

export default Header;
