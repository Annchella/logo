// src/components/PortfolioCard.jsx
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const PortfolioCard = ({ title, image, category, className }) => {
    return (
        <div className={`relative group overflow-hidden rounded-sm cursor-pointer ${className}`}>
            {/* Background Image */}
            {image ? (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
            ) : (
                <div className="w-full h-full bg-[#0a0a0a]"></div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent opacity-90 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col items-start gap-1">
                <h3 className="text-[26px] md:text-[32px] font-bold text-white uppercase font-syne tracking-tight leading-[0.95] mb-1">
                    {title}
                </h3>
                <p className="text-[10px] md:text-[11px] font-bold text-[#EB5A28] uppercase tracking-[0.12em] font-poppins">
                    {category || 'REACH YOUR TARGET AUDIENCE'}
                </p>
                <div className="mt-3 flex items-center gap-2 group/link">
                    <span className="text-[10px] text-white font-bold tracking-[0.15em] uppercase font-poppins">
                        LEARN MORE
                    </span>
                    <FaArrowRightLong className="text-[#EB5A28] text-[10px] transform group-hover/link:translate-x-1 transition-transform" />
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
