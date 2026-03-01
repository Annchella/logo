const ServiceFeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center group cursor-pointer p-3 md:p-4 transition-all duration-300">
      <div
        className="w-[88px] h-[88px] md:w-[96px] md:h-[96px] rounded-full flex items-center justify-center mb-7 transition-all duration-500 transform group-hover:scale-110 bg-[#1E1E1E] border border-white/10 group-hover:bg-brand-orange group-hover:shadow-[0_0_30px_rgba(241,94,34,0.35)] group-hover:border-transparent overflow-hidden p-5"
      >
        <img
          src={icon}
          alt={title}
          className={`max-w-full max-h-full w-auto h-auto object-contain transition-all duration-300 ${icon && icon.includes('-v2') ? '' : 'brightness-0 invert'
            }`}
        />
      </div>

      <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-2 md:mb-3 font-syne uppercase tracking-wide group-hover:text-brand-orange transition-colors">
        {title}
      </h3>
      <p className="text-[13px] md:text-[14px] leading-relaxed font-poppins font-light max-w-[290px] transition-colors duration-300 text-gray-400 group-hover:text-brand-orange">
        {description}
      </p>
    </div>
  );
};

export default ServiceFeatureCard;
