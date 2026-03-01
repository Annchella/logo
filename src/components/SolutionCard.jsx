
import { FaArrowRightLong } from 'react-icons/fa6';

const SolutionCard = ({ title, description, image }) => {
  return (
    <div className="relative flex flex-col items-start text-white shadow-xl h-[300px] md:h-[400px] group overflow-hidden rounded-sm">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
      <div className="relative z-10 p-6 h-full flex flex-col justify-end w-full">
        <h3 className="text-[16px] md:text-[18px] font-bold mb-1 text-white uppercase tracking-wider font-syne">{title}</h3>
        <p className="text-gray-300 text-[13px] leading-tight mb-4 font-poppins">{description}</p>
        <div className="flex items-center gap-2 group/link cursor-pointer">
          <span className="text-brand-orange text-[12px] font-bold uppercase tracking-[0.2em] transition-all group-hover/link:underline underline-offset-4">Learn more</span>
          <FaArrowRightLong className="text-brand-orange text-xs transition-transform group-hover/link:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;