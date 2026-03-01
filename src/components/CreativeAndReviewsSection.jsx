// src/components/CreativeAndReviewsSection.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Crea01 from '../assets/CREA01.png';
import Crea02 from '../assets/CREA02.png';
import Crea03 from '../assets/CREA03.png';
import Crea04 from '../assets/CREA04.png';
import DM01 from '../assets/DM01.png';
import DM02 from '../assets/DM02.png';
import Review01 from '../assets/REview01.png';
import Review02 from '../assets/REview02.png';
import Review03 from '../assets/REview03.png';
import Review04 from '../assets/REview04.png';
import Review05 from '../assets/REview05.png';

const stats = [
  { value: '5000+', label: 'PROJECTS' },
  { value: '500+', label: 'CLIENTS' },
  { value: '2+', label: 'COUNTRIES' },
  { value: '10K', label: 'CREATIVES' },
];

const clientReviews = [
  {
    category: 'Digital Marketing',
    rating: 4,
    text: 'Proven experience in digital marketing or related field Strong knowledge of SEO/SEM, Google Ads, Facebook Ads, and Google Analytics Proficiency in tools like Canva, WordPress, Mailchimp, etc.',
    image: DM01,
  },
  {
    category: 'Digital Marketing',
    rating: 4,
    text: 'Proven experience in digital marketing or related field Strong knowledge of SEO/SEM, Google Ads, Facebook Ads, and Google Analytics Proficiency in tools like Canva, WordPress, Mailchimp, etc.',
    image: DM02,
  },
];

const galleryImagesBottom = [
  {
    src: Review01,
    alt: 'Marketing Creative',
    author: 'Dr Anton Jhon',
    role: 'Founder, Montiel.inc',
  },
  {
    src: Review02,
    alt: 'Travel Creative',
    author: 'Dr Anton Jhon',
    role: 'Founder, Montiel.inc',
  },
  {
    src: Review03,
    alt: 'Product Design',
    author: 'Dr Anton Jhon',
    role: 'Founder, Montiel.inc',
  },
  {
    src: Review04,
    alt: 'Digital Art',
    author: 'Dr Anton Jhon',
    role: 'Founder, Montiel.inc',
  },
  {
    src: Review05,
    alt: 'Digital Art',
    author: 'Dr Anton Jhon',
    role: 'Founder, Montiel.inc',
  },
];

const CreativeAndReviewsSection = () => {
  return (
    <section className=" text-white ">
      <div className="mx-auto">
        {/* Grouped Stats & Creative Section */}
        <div className="bg-[#1B1C1A] py-16 pb-20 rounded-sm">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24 px-4 sm:px-12 lg:px-20">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-brand-orange text-3xl md:text-4xl font-bold mb-1 md:mb-2 font-poppins">{stat.value}</p>
                <p className="text-gray-400 text-sm md:text-lg uppercase tracking-wider font-poppins">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Creative Title & Carousel Container */}
          <div className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48">
            {/* Background Text */}
            <div className="absolute top-0 left-0 right-0 flex justify-center select-none pointer-events-none z-0">
              <h2
                className="text-[50px] min-[400px]:text-[70px] sm:text-[100px] md:text-[180px] lg:text-[210px] xl:text-[240px] font-extrabold leading-none font-poppins"
                style={{
                  color: 'transparent',
                  WebkitTextStrokeWidth: '2px',
                  WebkitTextStrokeColor: '#F15E22',
                  letterSpacing: '0.05em',
                  opacity: '0.8',
                }}
              >
                CREATIVE
              </h2>
            </div>

            {/* Infinite Scrolling Carousel */}
            <div className="relative z-10 bg-[#212121] w-full overflow-hidden group">
              <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
                {/* First Set of Images */}
                {[Crea01, Crea02, Crea03, Crea04].map((img, idx) => (
                  <div key={`set1-${idx}`} className="flex-none w-[220px] min-[400px]:w-[280px] sm:w-[340px] md:w-[400px] h-[300px] min-[400px]:h-[350px] md:h-[473px] px-3">
                    <img
                      src={img}
                      alt={`Creative ${idx + 1}`}
                      className="w-full h-full object-cover rounded-sm transition-all duration-500 cursor-pointer"
                    />
                  </div>
                ))}
                {/* Second Set (Duplicate for seamless loop) */}
                {[Crea01, Crea02, Crea03, Crea04].map((img, idx) => (
                  <div key={`set2-${idx}`} className="flex-none w-[220px] min-[400px]:w-[280px] sm:w-[340px] md:w-[400px] h-[300px] min-[400px]:h-[350px] md:h-[473px] px-3">
                    <img
                      src={img}
                      alt={`Creative Duplicate ${idx + 1}`}
                      className="w-full h-full object-cover rounded-sm transition-all duration-500 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client Reviews Section */}
        <div className="py-24 px-4 sm:px-12 lg:px-44 bg-[#212121]">
          <div className="mb-12 text-center md:text-left">
            <h3 className="text-white text-[18px] md:text-[20px] font-poppins font-light tracking-wide">
              Client
            </h3>
            <h2 className="text-[20px] md:text-[50px] text-brand-orange leading-none font-bold">
              Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {clientReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-sm shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-4 border-gray-50 p-1 bg-white shadow-inner">
                  <img src={review.image} alt="Client" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <h4 className="text-[20px] md:text-[22px] font-bold text-gray-900 mb-1 font-poppins">{review.category}</h4>
                  <div className="flex text-yellow-500 mb-4 text-xs gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar key={i} className={i < review.rating ? 'fill-current' : 'text-gray-200'} />
                    ))}
                  </div>
                  <p className="text-[14px] text-gray-600 leading-relaxed font-poppins font-light line-clamp-4">
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Gallery (Showcase) */}
        <div className="px-4 sm:px-12 lg:px-44 pb-24 bg-[#212121]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImagesBottom.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden group h-[400px] md:h-[450px] rounded-sm cursor-pointer border border-white/5"
              >
                {/* Background Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Play Icon and Info at Bottom */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white transform group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[14px] font-bold text-white font-poppins tracking-wide leading-tight uppercase">
                      {item.author}
                    </p>
                    <p className="text-[11px] text-gray-300 font-poppins font-light uppercase">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreativeAndReviewsSection;