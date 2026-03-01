import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioCard from './PortfolioCard';
import { FaArrowRightLong } from 'react-icons/fa6';

const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/portfolio');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    if (path.startsWith('/src/assets/')) {
      const filename = path.split('/').pop();
      return `/assets/${filename}`;
    }
    return path;
  };

  // Height classes to match the masonry layout in the image
  const desktopHeights = [
    'lg:h-[512px]', // PRINT & PRODUCTION
    'lg:h-[620px]', // BRANDING
    'lg:h-[384px]', // MOTION GRAPHICS
    'lg:h-[512px]', // PACKAGE DESIGNING
    'lg:h-[354px]', // WEBSITE DESIGNING
    'lg:h-[300px]', // VIDEO PRODUCTION
  ];

  return (
    <section className="py-20 md:py-24 lg:py-28 px-4 md:px-10 lg:px-16 bg-[#1B1C1A] text-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
          <div className="flex flex-col gap-8">
            <p className="text-[14px] md:text-[16px] text-gray-300 leading-relaxed font-poppins font-light max-w-[760px]">
              From strategy to stunning visuals, discover the services that empower our clients'
              success. Explore our portfolio of successful Projects.
            </p>
            <a
              href="#"
              className="w-fit bg-[#2D2D2D] hover:bg-[#EB5A28]/20 border border-white/10 rounded-full px-6 py-2.5 flex items-center gap-3 transition-all group active:scale-95"
            >
              <span className="text-[11px] font-extrabold tracking-[0.15em] uppercase font-syne text-white">
                PORTFOLIOS
              </span>
              <FaArrowRightLong className="text-[#EB5A28] text-xs transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max items-start">
          {/* First Column */}
          <div className="flex flex-col gap-4">
            {projects[0] && (
              <PortfolioCard
                key={projects[0].id}
                title={projects[0].title}
                image={getImageUrl(projects[0].image)}
                category={projects[0].category}
                className="h-[360px] lg:h-[480px]"
              />
            )}
            {projects[3] && (
              <PortfolioCard
                key={projects[3].id}
                title={projects[3].title}
                image={getImageUrl(projects[3].image)}
                category={projects[3].category}
                className="h-[480px] lg:h-[680px]"
              />
            )}
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-4">
            {projects[1] && (
              <PortfolioCard
                key={projects[1].id}
                title={projects[1].title}
                image={getImageUrl(projects[1].image)}
                category={projects[1].category}
                className="h-[480px] lg:h-[580px]"
              />
            )}
            {projects[4] && (
              <PortfolioCard
                key={projects[4].id}
                title={projects[4].title}
                image={getImageUrl(projects[4].image)}
                category={projects[4].category}
                className="h-[320px] lg:h-[384px]"
              />
            )}
          </div>

          {/* Third Column */}
          <div className="flex flex-col gap-4">
            {projects[2] && (
              <PortfolioCard
                key={projects[2].id}
                title={projects[2].title}
                image={getImageUrl(projects[2].image)}
                category={projects[2].category}
                className="h-[360px] lg:h-[640px]"
              />
            )}
            {projects[5] && (
              <PortfolioCard
                key={projects[5].id}
                title={projects[5].title}
                image={getImageUrl(projects[5].image)}
                category={projects[5].category}
                className="h-[320px] lg:h-[420px]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
