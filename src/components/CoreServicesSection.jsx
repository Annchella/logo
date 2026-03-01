// src/components/CoreServicesSection.jsx
import React from 'react';
import ServiceFeatureCard from './ServiceFeatureCard';

// Import icons
import digitalPrintingIcon from '../assets/icon-digital-printing-v2.png';
import offsetPrintingIcon from '../assets/icon-offset-printing-v2.png';
import promotionalFlagsIcon from '../assets/icon-promotional-flags.png';
import corporateGiftsIcon from '../assets/icon-corporate-gifts.png';
import signagesIcon from '../assets/icon-signages.png';
import largeFormatPrintingIcon from '../assets/icon-large-format-printing.png';
import wallGlassBrandingIcon from '../assets/icon-wall-glass-branding.png';
import tshirtsJerseyIcon from '../assets/icon-tshirts-jersey.png';
import acrylicProductsIcon from '../assets/icon-acrylic-products.png';

const CoreServicesSection = () => {
  const coreServices = [
    {
      id: 1,
      title: 'Digital Printing',
      description: 'Creative designs that build strong brand identity and visual impact.',
      icon: digitalPrintingIcon,
    },
    {
      id: 2,
      title: 'Offset Printing',
      description: 'High-quality printing solutions with precise colors and premium finishing.',
      icon: offsetPrintingIcon,
    },
    {
      id: 3,
      title: 'Promotional Flags',
      description: 'Eye-catching promotional flags designed to attract and engage',
      icon: promotionalFlagsIcon,
    },
    {
      id: 4,
      title: 'Corporate Gifts',
      description: 'Customized gifts that enhance brand recall and customer relationships.',
      icon: corporateGiftsIcon,
    },
    {
      id: 5,
      title: 'Signages',
      description: 'Durable and attractive signage solutions for effective brand communication.',
      icon: signagesIcon,
    },
    {
      id: 6,
      title: 'Large Format Printing',
      description: 'Transform your vehicles into moving advertisements for your brand.',
      icon: largeFormatPrintingIcon,
    },
    {
      id: 7,
      title: 'Wall & Glass Branding',
      description: 'Transform walls and glass into powerful brand touchpoints.',
      icon: wallGlassBrandingIcon,
    },
    {
      id: 8,
      title: 'T Shirts & Jersey',
      description: 'Original custom designs that make your apparel stand out',
      icon: tshirtsJerseyIcon,
    },
    {
      id: 9,
      title: 'Acrylic Products',
      description: 'Premium acrylic fabrication with precision laser cutting and engraving.',
      icon: acrylicProductsIcon,
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-[#212121] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16">
        <h2 className="text-[36px] sm:text-[45px] md:text-[55px] font-bold text-center text-white mb-16 md:mb-20 font-syne uppercase tracking-tighter leading-[0.95]">
          OUR CORE <br className="sm:hidden" /> SERVICES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 sm:gap-y-16 gap-x-8 lg:gap-x-12">
          {coreServices.map((service) => (
            <ServiceFeatureCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
