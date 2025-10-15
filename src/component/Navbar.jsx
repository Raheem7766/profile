import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Layout (sm and below) */}
      <div className='w-full h-[60px] bg-[#1A0B2E] flex items-center justify-between px-4 relative z-50 md:hidden'>
        {/* Logo */}
        <div className='flex items-center justify-center'>
          <Link to="/" onClick={closeMenu}>
            <img src={Logo} alt="Logo" className='h-6 w-6 cursor-pointer hover:opacity-80 transition-opacity' />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div>
          <button 
            onClick={toggleMenu}
            className='text-white hover:text-[#7127BA] transition-colors p-2'
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className='absolute top-full left-0 right-0 h-[100vh] bg-[#1A0B2E] border-t border-[#7127BA]'>
            <ul className='flex flex-col items-center py-4 space-y-4'>
              <li>
                <Link 
                  to="/" 
                  onClick={closeMenu}
                  className={`hover:text-[#7127BA] transition-colors text-base py-2 px-4 ${location.pathname === '/' ? 'text-[#7127BA]' : 'text-white'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={closeMenu}
                  className={`hover:text-[#7127BA] transition-colors text-base py-2 px-4 ${location.pathname === '/about' ? 'text-[#7127BA]' : 'text-white'}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/skills" 
                  onClick={closeMenu}
                  className={`hover:text-[#7127BA] transition-colors text-base py-2 px-4 ${location.pathname === '/skills' ? 'text-[#7127BA]' : 'text-white'}`}
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Layout (md and above) - Original Design */}
      <div className='w-full h-[70px] bg-[#1A0B2E] flex items-center justify-evenly hidden md:flex'>
        <div className='h-full w-[60%] m-auto flex items-center justify-between'>

          <div className='h-full w-max flex items-center justify-center'>
            <Link to="/">
              <img src={Logo} alt="" className='h-8 w-8 cursor-pointer hover:opacity-80 transition-opacity' />
            </Link>
          </div>
          <div className='h-full w-max flex items-center'>
            <ul className='flex items-center justify-center text-white gap-[8rem]'>
              <li>
                <Link 
                  to="/" 
                  className={`hover:text-[#7127BA] transition-colors ${location.pathname === '/' ? 'text-[#7127BA]' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`hover:text-[#7127BA] transition-colors ${location.pathname === '/about' ? 'text-[#7127BA]' : ''}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/skills" 
                  className={`hover:text-[#7127BA] transition-colors ${location.pathname === '/skills' ? 'text-[#7127BA]' : ''}`}
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
