// src/components/WorkflowSection.jsx
import React from 'react';
import WorkflowItem from './WorkflowItem';

// Import workflow icons
import collectDetailsIcon from '../assets/icon-collect-details.png'; // Placeholder
import designIcon from '../assets/icon-design.png';               // Placeholder
import approvePrintIcon from '../assets/icon-approve-print.png';   // Placeholder
import fastDeliveryIcon from '../assets/icon-fast-delivery.png';   // Placeholder

const WorkflowSection = () => {
  const workflowSteps = [
    { id: 1, title: 'Collect Details', icon: collectDetailsIcon },
    { id: 2, title: 'Design', icon: designIcon },
    { id: 3, title: 'Approve & Print', icon: approvePrintIcon },
    { id: 4, title: 'Fast Delivery', icon: fastDeliveryIcon },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#1B1C1A] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-12 lg:px-44">
        {/* Split Header Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16 mb-20 lg:mb-24">
          {/* Left Column: Title */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
            <h2 className="text-[40px] sm:text-[50px] md:text-[60px] text-white leading-[0.9] font-syne font-bold uppercase tracking-tighter">
              OUR WORK <br className="hidden sm:block" /> FLOW
            </h2>
          </div>

          {/* Vertical Separator (Only visible on lg and up) */}
          <div className="hidden lg:block w-[1.5px] h-32 bg-brand-orange opacity-60"></div>

          {/* Right Column: Description */}
          <div className="w-full lg:w-2/3 flex items-center justify-center lg:justify-start">
            <p className="text-[14px] md:text-[16px] text-gray-300 leading-relaxed font-poppins font-light max-w-2xl text-center lg:text-left">
              tincidunt Cras adipiscing nec quam ipsum id enim. nibh lorem. urna. sollicitudin.
              massa tincidunt at, quam nibh ex ex ullamcorper vehicula, ipsum Donec elit non
              sit sodales. felis, gravida quis sodales. quam ullamcorper massa Ut Sed non.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-10">
          {workflowSteps.map((step, index) => (
            <WorkflowItem key={step.id} index={index} icon={step.icon} title={step.title} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default WorkflowSection;