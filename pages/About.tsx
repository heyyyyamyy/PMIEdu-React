import React from 'react';
import { motion } from 'framer-motion';
import FloatingShapes from '../components/FloatingShapes';
import { CheckCircle, Target, Users, Zap, Award, Globe, User } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    {
      year: "2015",
      title: "Inception",
      description: "PMIEdu started as a small local study group dedicated to helping project managers navigate the complexities of PMP certification."
    },
    {
      year: "2018",
      title: "Official ATP Status",
      description: "We were recognized as a Premier Authorized Training Partner (ATP) by the Project Management Institute (PMI), validating our curriculum quality."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched our state-of-the-art online learning platform, enabling professionals from over 50 countries to access our training during the global shift to remote work."
    },
    {
      year: "2023",
      title: "Global Milestone",
      description: "Celebrated 50,000+ certified professionals and expanded our course offerings to include Agile, Risk Management, and Business Analysis."
    }
  ];

  const team = [
    {
      name: "Rajaram",
      role: "Chief Financial Officer"
    },
    {
      name: "Ramprasad",
      role: "Chief Counselor"
    },
    {
      name: "Prat Willson",
      role: "Chief Technology Officer"
    },
    {
      name: "Akhilesh",
      role: "Account/Finance Manager"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#050505] pt-24">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-6 lg:px-12 overflow-hidden">
        <FloatingShapes />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            We Are <span className="text-[#00ff84]">PMIEdu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Bridging the gap between ambition and achievement. We are a premier authorized training partner dedicated to shaping the next generation of project management leaders through innovation, expertise, and unwavering support.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0a0a0a] border-y border-white/5">
        <div className="w-full px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-[#00ff84]/30 transition-colors"
          >
            <div className="w-12 h-12 bg-[#00ff84]/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-[#00ff84]" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To democratize access to world-class project management education, ensuring that every professional has the tools, knowledge, and certification needed to thrive in a complex global economy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-[#00ff84]/30 transition-colors"
          >
            <div className="w-12 h-12 bg-[#00ff84]/10 rounded-lg flex items-center justify-center mb-6">
              <Zap className="text-[#00ff84]" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the world's most trusted partner in professional development, creating a ecosystem where learning is continuous, engaging, and directly translates to career success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-24 px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <div className="h-1 w-20 bg-[#00ff84] mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 ml-4 md:ml-0" />

            <div className="space-y-12">
              {milestones.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 pl-12 md:pl-0 md:text-right w-full">
                    <div className={`bg-[#121212] p-6 rounded-2xl border border-white/5 hover:border-[#00ff84]/30 transition-all ${
                       index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}>
                      <span className="text-[#00ff84] font-orbitron font-bold text-xl block mb-2">{item.year}</span>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border-2 border-[#00ff84] flex items-center justify-center shrink-0 z-10 ml-0.5 md:ml-0">
                    <div className="w-2 h-2 rounded-full bg-[#00ff84]" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Experts */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="w-full px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Experts</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our leadership team brings decades of industry experience to guide your professional journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 bg-[#121212] rounded-2xl border border-white/5 hover:border-[#00ff84] transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-[#00ff84]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,132,0.1)]">
                   <User size={40} className="text-[#00ff84]" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00ff84] transition-colors mb-2">{member.name}</h3>
                <p className="text-gray-400 text-sm font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Core Values */}
      <section className="py-20 px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Excellence', icon: Award, desc: "We uphold the highest standards in everything we do, ensuring our learners get nothing but the best." },
            { title: 'Innovation', icon: Globe, desc: "We constantly evolve our teaching methods and platform to stay ahead of industry trends." },
            { title: 'Integrity', icon: CheckCircle, desc: "We believe in honest, transparent guidance to help you make the best decisions for your career." }
          ].map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-[#121212] rounded-2xl border border-white/5 hover:border-[#00ff84]/20 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-[#00ff84] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,255,132,0.3)] group-hover:scale-110 transition-transform">
                <val.icon className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
              <p className="text-gray-400 text-sm">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-[#00ff84]/20 to-[#00cc6a]/10 border border-[#00ff84]/30 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff84]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00ff84]/10 rounded-full blur-3xl" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful professionals who have transformed their careers with PMIEdu.
            </p>
            <button className="bg-[#00ff84] hover:bg-[#00cc6a] text-black text-lg font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(0,255,132,0.4)] hover:scale-105">
              Browse Certifications
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;