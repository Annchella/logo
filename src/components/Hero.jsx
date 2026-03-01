// src/components/Hero.jsx
import React from 'react';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-end justify-center text-center p-4 pb-20 overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1A] via-black/40 to-transparent"></div>
      <div className="relative z-10 text-white max-w-5xl mx-auto w-full px-4 text-center">
        <h2 className="text-[18px] sm:text-[24px] md:text-[34px] font-bold text-brand-orange mb-3 md:mb-6 uppercase tracking-[0.3em] font-syne">
          Printing & Branding Solution
        </h2>
        <h1 className="text-[60px] sm:text-[90px] md:text-[120px] lg:text-[180px] font-bold mb-6 md:mb-10 text-brand-orange leading-[0.8] font-syne tracking-tighter">
          IN UAE
        </h1>
        <p className="text-[14px] sm:text-lg md:text-xl font-poppins font-light text-gray-100 max-w-3xl mx-auto leading-relaxed">
          We craft impactful Printing works, advertising, branding & digital marketing strategies
          to grow your brand and achieve measurable success!
        </p>
      </div>
    </section>
  );
};

export default Hero;