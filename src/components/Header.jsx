import React, { useState } from 'react';
import { FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <header className="bg-[#2D2D2D]/90 backdrop-blur-md text-white rounded-xl shadow-2xl flex items-center justify-between px-6 md:px-8 py-3 w-full max-w-5xl border border-white/5 relative">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-2xl md:text-3xl font-bold tracking-tight">logo</span>
        </div>

        {/* Desktop Navigation Section */}
        <nav className="hidden md:flex items-center space-x-10 text-[13px] font-medium text-gray-300">
          <a href="/" className="hover:text-white transition-colors duration-200">Home</a>
          <a href="#" className="hover:text-white transition-colors duration-200">CodeWorks</a>
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors duration-200 group">
            Services
            <FaChevronDown className="text-[10px] group-hover:text-white transition-colors" />
          </a>
          <a href="/admin" className="hover:text-white transition-colors duration-200">Dashboard</a>
          <div className="relative pb-1">
            <a href="#" className="text-white">Our Team</a>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange rounded-full"></div>
          </div>
        </nav>

        {/* Desktop Contact Us Section */}
        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="flex items-center gap-2 bg-[#3D3D3D] hover:bg-[#4D4D4D] border border-white/10 px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300 active:scale-95 shadow-lg group"
          >
            <span className="text-gray-200 group-hover:text-white">Contact Us</span>
            <FaWhatsapp className="text-[#25D366] text-lg" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <a
            href="#"
            className="flex items-center justify-center p-2 bg-[#3D3D3D] rounded-full border border-white/10 text-brand-orange"
          >
            <FaWhatsapp className="text-lg" />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 top-[72px] md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
        >
          <div className="mx-4 bg-[#2D2D2D] rounded-xl border border-white/10 shadow-2xl p-6 flex flex-col gap-6">
            <nav className="flex flex-col gap-6 text-[15px] font-medium text-gray-300">
              <a href="#" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>CodeWorks</a>
              <a href="#" className="flex items-center justify-between hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Services
                <FaChevronDown className="text-xs" />
              </a>
              <a href="#" className="text-brand-orange" onClick={() => setIsMenuOpen(false)}>Our Team</a>
            </nav>
            <div className="pt-4 border-t border-white/10">
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-brand-orange text-white px-5 py-3 rounded-full text-[15px] font-bold transition-all shadow-lg active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Contact Us</span>
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;


