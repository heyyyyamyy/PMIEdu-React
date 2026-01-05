import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Globe, DollarSign, Send, Upload } from 'lucide-react';

const BecomeInstructor: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    linkedin: '',
    expertise: '',
    experience: ''
  });

  const benefits = [
    {
      icon: <Globe size={24} />,
      title: "Global Reach",
      description: "Connect with students from over 150 countries and expand your professional network."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Earn More",
      description: "Competitive compensation with revenue sharing models and performance bonuses."
    },
    {
      icon: <Users size={24} />,
      title: "Impact Lives",
      description: "Help professionals advance their careers and achieve their certification goals."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Flexible Schedule",
      description: "Teach on your own terms. Choose batches that fit your availability."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#050505] pt-24 pb-20 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00ff84]/5 rounded-full blur-[120px] pointer-events-none" />

       <div className="w-full px-6 lg:px-12">
         
         {/* Hero Section */}
         <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
           <div className="lg:w-1/2">
             <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
             >
               Inspire the Next Generation of <span className="text-[#00ff84]">Leaders</span>
             </motion.h1>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-gray-400 text-lg mb-8 leading-relaxed"
             >
               Join PMIEdu's community of world-class instructors. Share your knowledge, mentor aspiring professionals, and build your personal brand on a global stage.
             </motion.p>
             <motion.button 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
               className="bg-[#00ff84] hover:bg-[#00cc6a] text-black font-bold py-3 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(0,255,132,0.4)] hover:scale-105"
             >
               Start Teaching
             </motion.button>
           </div>
           
           <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:w-1/2 relative"
           >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1000" 
                    alt="Instructor teaching" 
                    className="w-full h-auto object-cover"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white font-bold text-lg">"Teaching at PMIEdu has been the most rewarding experience of my career."</p>
                    <p className="text-[#00ff84] text-sm mt-1">— Sarah J., PMP Instructor</p>
                 </div>
              </div>
              {/* Decorative elements behind image */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#00ff84]/30 rounded-2xl z-0" />
           </motion.div>
         </div>

         {/* Benefits Grid */}
         <div className="mb-20">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-white mb-4">Why Teach with Us?</h2>
             <div className="h-1 w-20 bg-[#00ff84] mx-auto rounded-full" />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {benefits.map((benefit, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-[#121212] p-6 rounded-2xl border border-white/5 hover:border-[#00ff84]/50 transition-all group"
               >
                 <div className="w-12 h-12 bg-[#00ff84]/10 rounded-lg flex items-center justify-center text-[#00ff84] mb-4 group-hover:scale-110 transition-transform">
                   {benefit.icon}
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                 <p className="text-gray-400 text-sm">{benefit.description}</p>
               </motion.div>
             ))}
           </div>
         </div>

         {/* Application Form */}
         <div id="apply-form" className="max-w-3xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
           >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ff84] to-transparent" />
              
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Apply to Become an Instructor</h2>
                <p className="text-gray-400">Join our team of elite trainers. Fill out the form below and we'll get back to you.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ff84] transition-colors"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ff84] transition-colors"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">LinkedIn Profile URL</label>
                  <input 
                    type="url" 
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ff84] transition-colors"
                    placeholder="https://linkedin.com/in/johndoe"
                    value={form.linkedin}
                    onChange={(e) => setForm({...form, linkedin: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Area of Expertise</label>
                  <select 
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ff84] transition-colors"
                    value={form.expertise}
                    onChange={(e) => setForm({...form, expertise: e.target.value})}
                  >
                    <option value="">Select a domain</option>
                    <option value="Project Management">Project Management (PMP, CAPM)</option>
                    <option value="Agile">Agile & Scrum (ACP, CSM, SAFe)</option>
                    <option value="Cloud">Cloud Computing (AWS, Azure, Google)</option>
                    <option value="Cybersecurity">Cybersecurity (CISSP, CISM)</option>
                    <option value="Data Science">Data Science & Analytics</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-300">Years of Teaching Experience</label>
                   <input 
                    type="number" 
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ff84] transition-colors"
                    placeholder="e.g. 5"
                    value={form.experience}
                    onChange={(e) => setForm({...form, experience: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Upload Resume / CV</label>
                  <div className="border-2 border-dashed border-white/10 rounded-lg p-6 text-center hover:border-[#00ff84]/50 transition-colors cursor-pointer bg-[#0a0a0a]">
                    <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                    <p className="text-sm text-gray-400">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOCX up to 5MB</p>
                  </div>
                </div>

                <button className="w-full bg-[#00ff84] hover:bg-[#00cc6a] text-black font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-4 shadow-lg hover:shadow-[#00ff84]/20">
                  <Send size={18} />
                  Submit Application
                </button>

              </form>
           </motion.div>
         </div>

       </div>
    </div>
  );
};

export default BecomeInstructor;
