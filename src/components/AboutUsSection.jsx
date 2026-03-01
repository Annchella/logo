// src/components/AboutUsSection.jsx
import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-12 lg:px-56 bg-[#212121] text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Left Column: Heading */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
            <h2 className="text-[13px] md:text-[14px] font-bold text-brand-orange mb-6 md:mb-8 tracking-[2px] uppercase font-poppins">
              ABOUT US
            </h2>
            <h3 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[75px] leading-[0.95] font-proxemic uppercase tracking-tighter">
              CREATIVE<br />AGENCY
            </h3>
          </div>

          {/* Right Column: Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 md:mt-16">
            <p className="text-[14px] md:text-[16px] text-gray-400 leading-relaxed mb-10 font-poppins font-light max-w-lg">
              Nunc lorem. turpis convallis. Praesent elit vitae Morbi risus id Lorem Vestibulum
              placerat ipsum facilisis facilisis massa nibh dignissim, faucibus laoreet In at non eget
              Donec elit maximus consectetur nulla, sodales. vehicula, amet, dui.
            </p>
            <a
              href="#"
              className="group flex items-center gap-3 text-brand-orange text-[14px] font-bold font-poppins uppercase tracking-widest hover:text-white transition-all"
            >
              <span>Read More</span>
              <div className="w-10 h-[2px] bg-brand-orange group-hover:bg-white group-hover:w-14 transition-all duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};



export default AboutUsSection;