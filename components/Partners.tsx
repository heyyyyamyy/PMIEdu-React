import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  "GOOGLE", "AMAZON", "MICROSOFT", "TESLA", "IBM", "ORACLE", "CISCO", "INTEL"
];

const Partners: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm font-semibold tracking-[0.2em] uppercase mb-10"
        >
          Trusted by industry leaders worldwide
        </motion.p>
        
        <div className="relative flex overflow-x-hidden group">
            <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-32">
                {[...companies, ...companies, ...companies].map((company, index) => (
                  <span 
                    key={index} 
                    className="text-2xl md:text-3xl font-orbitron font-bold text-white/20 hover:text-[#00ff84] transition-colors duration-300 cursor-default"
                  >
                    {company}
                  </span>
                ))}
            </div>
             <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-16 md:gap-32">
                {[...companies, ...companies, ...companies].map((company, index) => (
                  <span 
                    key={`clone-${index}`} 
                    className="text-2xl md:text-3xl font-orbitron font-bold text-white/20 hover:text-[#00ff84] transition-colors duration-300 cursor-default"
                  >
                    {company}
                  </span>
                ))}
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;