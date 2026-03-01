// src/components/ServicesWeProvideSection.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServicesWeProvideSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return `/api${path}`;
  };

  return (
    <section className="bg-[#1B1C1A] py-10 md:py-14 text-white overflow-hidden font-poppins">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 mb-10 md:mb-12">
          <div className="w-full md:w-[400px] shrink-0">
            <h2 className="text-[38px] sm:text-[44px] md:text-[52px] text-white leading-[0.9] font-syne font-bold uppercase tracking-tight text-left">
              SERVICES<br />WE PROVIDE
            </h2>
          </div>

          <div className="hidden md:block w-[1.5px] h-16 bg-[#EB5A28]"></div>

          <div className="flex-1">
            <p className="text-[13px] md:text-[15px] text-gray-300 leading-[1.6] font-normal max-w-[800px] text-left">
              enim. libero, amet, Ut quis enim. libero, non tincidunt In vitae id tincidunt
              ex. Praesent Nunc dui diam non. adipiscing ultrices Vestibulum laoreet
              massa id varius varius Lorem eu placerat. nec consectetur in elit fringilla
              cursus non commodo eu elementum consectetur fringilla dolor tempor sit
              tincidunt lobortis,
            </p>
          </div>
        </div>

        {/* Services List Section */}
        <div className="flex flex-col border-t border-white/20">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-row items-start py-5 md:py-7 border-b border-white/20 gap-3 md:gap-5 group transition-all duration-300 relative"
            >
              {/* Number Section */}
              <div className="w-[45px] md:w-[85px] text-[14px] md:text-[16px] text-white/40 font-bold uppercase shrink-0 pt-0.5">
                ({service.number || `00${index + 1}`})
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
                <div className="max-w-[820px]">
                  <h3 className="text-[17px] md:text-[22px] font-bold text-[#EB5A28] mb-1.5 md:mb-2 font-syne uppercase tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-[12px] md:text-[13.5px] text-gray-400 font-normal leading-[1.5] tracking-tight">
                    {service.description}
                  </p>
                </div>

                {/* Image Section */}
                {service.image && (
                  <div className="w-full md:w-[240px] lg:w-[280px] h-[100px] md:h-[130px] overflow-hidden rounded-xl shrink-0">
                    <img
                      src={getImageUrl(service.image)}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesWeProvideSection;
