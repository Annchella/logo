// src/components/TeamSection.jsx
import React from 'react';
import DesignerImg from '../assets/Designer.png';
import SalesExecutive01Img from '../assets/SalesExecutive01.png';
import SalesExecutive02Img from '../assets/SalesExecutive02.png';
import SalesExecutive03Img from '../assets/SalesExecutive03.png';
import COOImg from '../assets/COO.png';

const teamMembers = [
  {
    name: 'demo',
    role: 'Designer',
    image: DesignerImg,
  },
  {
    name: 'demo',
    role: 'Sales Executive',
    image: SalesExecutive01Img,
  },
  {
    name: 'demo',
    role: 'Sales Executive',
    image: SalesExecutive02Img,
  },
  {
    name: 'demo',
    role: 'Sales Executive',
    image: SalesExecutive03Img,
  },
];

const TeamSection = () => {
  return (
    <section className="bg-[#212121] py-16 md:py-24 px-4 sm:px-12 lg:px-56 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Our COO's Message */}
        <div className="mb-20 md:mb-24">
          <h2 className="text-3xl md:text-[50px] font-bold mb-10 md:mb-12 font-proxemic uppercase tracking-wide leading-none text-white">
            Our COO's Message
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="flex-shrink-0 w-full max-w-[280px] md:max-w-none md:w-64 h-96 rounded-sm overflow-hidden shadow-2xl">
              <img
                src={COOImg}
                alt="COO"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="flex-grow text-gray-300 space-y-5 font-poppins font-light text-[15px] md:text-[16px] leading-relaxed">
              <p>
                ex Nunc Vestibulum urna. orci Vestibulum nisl. amet, placerat Quisque odio tincidunt elit
                elit diam elit nec nulla, leo. id quis tortor. lorem. efficitur. ipsum Morbi at, convallis.
                sodales. amet, id maximus tincidunt Cras non. malesuada
              </p>
              <p>
                nisl. lorem. venenatis nisi Lorem dolor Praesent dui. tincidunt non, dolor dolor tincidunt id
                vitae Morbi quis placerat ultrices porta non, ipsum Praesent non Nam massa scelerisque
                vitae viverra vel ullamcorper Sed risus placerat eu ex.
              </p>
              <p>
                malesuada tempor gravida elit dignissim, non Vestibulum libero, malesuada tincidunt
                elit. in tincidunt convallis. ipsum nisi est. vehicula, vitae tincidunt ex luctus vel ultrices leo.
                volutpat risus malesuada sollicitudin. nec in ex vitae
              </p>
              <p>
                adipiscing odio eget Nullam Morbi sapien ipsum vitae viverra sodales. viverra porta elit
                ac nulla, nec enim. scelerisque urna. vehicula, vitae quam nisl. Ut dui quis elit Morbi
                venenatis odio ullamcorper Lorem nec placerat turpis amet, ex
              </p>
              <button className="text-brand-orange font-bold mt-4 uppercase tracking-[0.2em] text-[12px] hover:underline underline-offset-8 transition-all">
                CEO SIGNATURE
              </button>
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div>
          <h2 className="text-3xl md:text-[40px] font-bold mb-10 md:mb-12 font-proxemic uppercase tracking-wide leading-none text-white">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="h-72 w-full overflow-hidden shadow-lg mb-6 border border-white/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <h3 className="text-brand-orange text-[18px] font-bold font-poppins mb-1 uppercase tracking-wider">{member.name}</h3>
                <p className="text-gray-400 font-poppins text-xs font-light tracking-[0.1em] uppercase">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;