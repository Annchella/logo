const WorkflowItem = ({ icon, title, index }) => {
  const delay = `${index * 0.5}s`;
  return (
    <div className="flex flex-col items-center text-center p-4 group cursor-pointer">
      {/* Container for the sliding icon effect */}
      <div className="relative mb-6 w-20 md:w-24 h-20 md:h-24 overflow-hidden">

        {/* The Original (White) Icon - Cycles out */}
        <div
          className="absolute inset-0 flex items-center justify-center animate-slide-up-white"
          style={{ animationDelay: delay }}
        >
          <img
            src={icon}
            alt={title}
            className="w-full h-auto object-contain brightness-0 invert"
          />
        </div>

        {/* The Hover (Colored/Orange) Icon - Cycles in */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 animate-slide-up-orange"
          style={{
            animationDelay: delay,
            filter: 'drop-shadow(0 0 8px rgba(241, 94, 34, 0.3))'
          }}
        >
          <img
            src={icon}
            alt={title}
            className="w-full h-auto object-contain"
          />
        </div>

      </div>

      <h3 className="text-white text-[15px] font-bold font-syne uppercase tracking-wider group-hover:text-brand-orange transition-colors duration-300">
        {title}
      </h3>
    </div>
  );
};


export default WorkflowItem;