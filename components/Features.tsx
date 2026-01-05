import React from 'react';
import { motion } from 'framer-motion';
import { Video, Users, Globe, Award, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Video size={32} />,
    title: "Live Interactive Classes",
    description: "Join real-time sessions with industry experts and engage in live Q&A."
  },
  {
    icon: <Users size={32} />,
    title: "Expert Mentorship",
    description: "Get 1-on-1 guidance from PMP® certified mentors with 10+ years of experience."
  },
  {
    icon: <Globe size={32} />,
    title: "Global Recognition",
    description: "Our certifications are recognized by top employers in over 150 countries."
  },
  {
    icon: <Award size={32} />,
    title: "Guaranteed Success",
    description: "Comprehensive study plans and mock exams to ensure you pass on the first try."
  },
  {
    icon: <Clock size={32} />,
    title: "Flexible Schedule",
    description: "Weekend and weekday batches available to suit your professional life."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Exam Protection",
    description: "Free exam retake insurance included with our premium bundles."
  }
];

const Features: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#050505] relative">
      <div className="w-full px-6 lg:px-12">
        
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Why Choose <span className="text-[#00ff84]">PMIEdu?</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-[#00ff84]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#00ff84]/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff84]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#111] flex items-center justify-center text-[#00ff84] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,132,0.1)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff84] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;