// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Ensure react-icons is installed

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-400 py-20 px-4 sm:px-12 lg:px-56">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        {/* Logo and Description */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-white text-4xl font-bold mb-6 font-syne uppercase tracking-wider">logo</h3>
          <p className="text-xl font-bold text-white mb-4 font-poppins">We Deliver The Best</p>
          <p className="text-[13px] font-poppins font-light leading-relaxed max-w-xs text-gray-400">
            Faucibus in ultrices Nunc laoreet non nec tincidunt tortor.
            est. ex risus felis, tincidunt lorem, sodales. Ut ex in quis
            faucibus at, Donec adipiscing ex sit
          </p>
          <div className="flex space-x-4 mt-10">
            <a href="#" className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-brand-orange transition-all duration-300 shadow-lg">
              <FaInstagram className="text-white text-lg" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-brand-orange transition-all duration-300 shadow-lg">
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a href="#" className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-brand-orange transition-all duration-300 shadow-lg">
              <span className="text-white font-bold text-lg">X</span>
            </a>
            <a href="#" className="w-10 h-10 bg-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-brand-orange transition-all duration-300 shadow-lg">
              <FaYoutube className="text-white text-lg" />
            </a>
          </div>
        </div>

        {/* Company Info */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-2">
          <h4 className="text-white text-[15px] font-bold mb-8 font-syne uppercase tracking-[0.2em]">Company Info</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-brand-orange transition-colors text-[13px] font-poppins font-light tracking-wide">About Us</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors text-[13px] font-poppins font-light tracking-wide">We are hiring</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors text-[13px] font-poppins font-light tracking-wide">Blog</a></li>
          </ul>
          <h4 className="text-white text-[15px] font-bold mt-12 mb-8 font-syne uppercase tracking-[0.2em]">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-brand-orange transition-colors text-[13px] font-poppins font-light tracking-wide">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors text-[13px] font-poppins font-light tracking-wide">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Features */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-2">
          <h4 className="text-white text-[15px] font-bold mb-8 font-syne uppercase tracking-[0.2em]">Features</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-brand-orange transition-colors text-[13px] font-poppins font-light tracking-wide">Business Marketing</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors text-[13px] font-poppins font-light tracking-wide">User Analytic</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors text-[13px] font-poppins font-light tracking-wide">Live Chat</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors text-[13px] font-poppins font-light tracking-wide">Unlimited Support</a></li>
          </ul>
        </div>

        {/* Get In Touch & Report */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-2">
          <h4 className="text-white text-[15px] font-bold mb-8 font-syne uppercase tracking-[0.2em]">Get In Touch</h4>
          <ul className="space-y-5 mb-12">
            <li className="flex items-center justify-center sm:justify-start gap-4">
              <FaPhoneAlt className="text-brand-orange text-sm flex-shrink-0" />
              <span className="text-[13px] font-poppins font-light">+971 00 000 000 || +971 00 000 000</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-4">
              <FaEnvelope className="text-brand-orange text-sm flex-shrink-0" />
              <span className="text-[13px] font-poppins font-light">info@tested.ae || test@printzed.ae</span>
            </li>
            <li className="flex items-start justify-center sm:justify-start gap-4">
              <FaMapMarkerAlt className="text-brand-orange text-sm mt-1 flex-shrink-0" />
              <span className="text-[13px] font-poppins font-light leading-relaxed">Shop No: 13, xxxxxxxxxxxxxxx<br />xxxxxxxxxxxxxxxxxxxx Dubai - U.A.E.</span>
            </li>
          </ul>

          <h4 className="text-white text-[15px] font-bold mb-6 font-syne uppercase tracking-[0.2em]">Report</h4>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Note"
              className="w-full pl-6 pr-14 py-4 bg-[#2D2D2D] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all shadow-inner"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-brand-orange p-2 rounded-lg text-white hover:bg-white hover:text-brand-orange transition-all duration-300 shadow-lg group">
              <svg className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;