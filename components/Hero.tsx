import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingShapes from './FloatingShapes';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#050505]">
      <FloatingShapes />
      
      {/* Content Container - Fluid but with padding aligned to Navbar */}
      <div className="w-full px-6 lg:px-12 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20 lg:mt-0">
        
        {/* Text Content */}
        <div className="flex flex-col gap-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight text-white">
              Empowering Future Leaders with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff84] to-[#00cc6a]">
                PMI-Certified Training
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            Official Authorized Training Partner of PMI – Delivering Globally Recognized Certifications in Different Domains.
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-12"
          >
            <div className="flex flex-col">
              <span className="font-orbitron text-3xl md:text-4xl font-bold text-[#00ff84] tracking-wider">
                48,878+
              </span>
              <span className="text-sm md:text-base text-gray-500 uppercase tracking-widest mt-1">
                Success Stories
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron text-3xl md:text-4xl font-bold text-[#00ff84] tracking-wider">
                20+
              </span>
              <span className="text-sm md:text-base text-gray-500 uppercase tracking-widest mt-1">
                Countries
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mt-4"
          >
            <Link to="/certifications">
              <button className="group bg-[#00ff84] hover:bg-[#00cc6a] text-black text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,132,0.3)] flex items-center justify-center gap-2">
                Explore Certifications
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
            <Link to="/certifications">
              <button className="bg-transparent border border-gray-600 hover:border-[#00ff84] hover:text-[#00ff84] text-white text-lg font-medium py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
                View Deals
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right side for 3D elements */}
        <div className="hidden lg:block h-full relative">
            {/* The FloatingShapes component handles the visuals here */}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default Hero;