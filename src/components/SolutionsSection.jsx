// src/components/SolutionsSection.jsx
import React from 'react';
import SolutionCard from './SolutionCard';

// Import images for the solution cards
import digitalMarketingImg from '../assets/digital-marketing.png'; // Placeholder image
import websiteDesigningImg from '../assets/website-designing.png'; // Placeholder image
import printingSolutionsImg from '../assets/printing-solutions.png'; // Placeholder image
import creativeAdSolutionsImg from '../assets/creative-ad-solutions.png'; // Placeholder image

const SolutionsSection = () => {
  // Dummy data for now, will be fetched from API later
  const solutions = [
    {
      id: 1,
      title: 'DIGITAL MARKETING',
      description: 'Reach your target audience',
      image: digitalMarketingImg,
    },
    {
      id: 2,
      title: 'WEBSITE DESIGNING',
      description: 'Convert visitors into customers',
      image: websiteDesigningImg,
    },
    {
      id: 3,
      title: 'PRINTING SOLUTIONS',
      description: 'Make your custom prints',
      image: printingSolutionsImg,
    },
    {
      id: 4,
      title: 'CREATIVE AD SOLUTIONS',
      description: 'Build a Brand that stands out',
      image: creativeAdSolutionsImg,
    },
  ];

  return (
    <section className="py-16 bg-[#1B1C1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-56">
        <h2 className="text-[40px] md:text-[50px] font-bold text-center font-syne text-brand-orange mb-4 uppercase tracking-tighter">
          Deliver Solutions
        </h2>
        <p className="text-center text-gray-400 font-poppins text-sm mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          We craft custom solutions to help you achieve your future marketing goals and objectives.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.id}
              title={solution.title}
              description={solution.description}
              image={solution.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;