// src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ image, title }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-72">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-2xl font-bold mb-1 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          {title}
        </h3>
        <span className="text-brand-orange text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          View Project →
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;