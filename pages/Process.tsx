import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Laptop, 
  Award, 
  ClipboardCheck, 
  Mail, 
  ShoppingCart, 
  Calendar, 
  UserCheck, 
  Video, 
  Globe, 
  Gift, 
  FileText 
} from 'lucide-react';

const detailedSteps = [
    { title: "1. Proposal Email", desc: "You will receive a proposal email from us with all necessary information." },
    { title: "2. Place Order", desc: "You have to place your order as you are finishing the payment process." },
    { title: "3. Receive Materials", desc: "After receiving your order, we will provide you with study materials and assistance." },
    { title: "4. Book Pre-Session", desc: "We will book your pre-session on a time and date that suits you within a couple of days." },
    { title: "5. Expert Connection", desc: "Before the scheduled time of your session, our expert will connect with you." },
    { title: "6. Session Access", desc: "We'll provide you access to the session link and related materials." },
    { title: "7. Live Session", desc: "During the Live session, a certified professional or lecturer from our team will assist you." },
    { title: "8. Quick Certification", desc: "Obtain your professional certification directly from us within 48–72 business hours after completing the session." },
    { title: "9. Global Recognition", desc: "You can offer your professional courses degree to your employer; the degree will be acknowledged internationally." },
    { title: "10. Advanced Training", desc: "Between 120-180 days, our experts provide live training and materials for the final session." },
    { title: "11. Ongoing Support", desc: "Our expert will continue to communicate with you up until the final on-board examination." },
    { title: "12. Hard Copy", desc: "You could acquire your professional courses degree in hardcopy upon request within 15 to 20 business days." }
];

const Process: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#050505] pt-24 pb-20">
      
      {/* Header Section */}
      <div className="w-full px-6 lg:px-12 mb-16 text-center">
        <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
            Certification <span className="text-[#00ff84]">Process</span>
        </motion.h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Thank you for showing your interest in participation. We are here to help you for the upgrade that you are looking forward to in your career.
        </p>
      </div>

      {/* Intro & Overview */}
      <section className="w-full px-6 lg:px-12 mb-20">
        <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff84]/5 rounded-full blur-[80px]" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Welcome to Our Program</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        We are aware that you are looking forward to filling the gap in your professional journey. We appreciate your interest in our professional course certification program. We will assist you in completing these professional courses.
                    </p>
                    <div className="p-6 bg-[#0a0a0a] rounded-xl border-l-4 border-[#00ff84]">
                        <h3 className="text-white font-bold mb-2">The Two-Test Structure</h3>
                        <p className="text-gray-400 text-sm">
                            You must take two different tests at two different dates. First, the <strong>Pre-board test</strong>, followed by the <strong>On-board test</strong> 120-180 days later.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                    <h3 className="text-xl font-bold text-white">Preparation Timeline</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#00ff84]/10 flex items-center justify-center text-[#00ff84] shrink-0 font-bold">1</div>
                            <p className="text-gray-300">Place Order & Take Pre-board Exam</p>
                        </div>
                        <div className="w-0.5 h-8 bg-white/10 ml-5"></div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#00ff84]/10 flex items-center justify-center text-[#00ff84] shrink-0 font-bold">2</div>
                            <p className="text-gray-300">120-180 Days Training (Live Sessions & Videos)</p>
                        </div>
                        <div className="w-0.5 h-8 bg-white/10 ml-5"></div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#00ff84]/10 flex items-center justify-center text-[#00ff84] shrink-0 font-bold">3</div>
                            <p className="text-gray-300">Final On-board Exam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Key Information Cards */}
      <section className="w-full px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#121212] p-8 rounded-2xl border border-white/5 hover:border-[#00ff84]/30 transition-all"
            >
                <div className="w-12 h-12 bg-[#00ff84]/10 rounded-lg flex items-center justify-center text-[#00ff84] mb-6">
                    <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Obtaining Certification</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    After completion of your session, we will evaluate your performance within 2-3 days. A soft copy will be shared on registered email within 3 working days after results are announced.
                </p>
            </motion.div>

            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#121212] p-8 rounded-2xl border border-white/5 hover:border-[#00ff84]/30 transition-all"
            >
                <div className="w-12 h-12 bg-[#00ff84]/10 rounded-lg flex items-center justify-center text-[#00ff84] mb-6">
                    <Laptop size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Online Classes</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Classes start after 120 days from the pre-board exam. We share video tutorials and weekend class schedules. Final exam dates are fixed between 150-180 days.
                </p>
            </motion.div>

            <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#121212] p-8 rounded-2xl border border-white/5 hover:border-[#00ff84]/30 transition-all"
            >
                <div className="w-12 h-12 bg-[#00ff84]/10 rounded-lg flex items-center justify-center text-[#00ff84] mb-6">
                    <ClipboardCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Examination Process</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Online platform based. 90-120 minutes duration with 90-120 objective questions derived from provided study material. Support available throughout.
                </p>
            </motion.div>
        </div>
      </section>

      {/* 12 Step Process */}
      <section className="w-full px-6 lg:px-12 mb-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Step-by-Step Guide</h2>
            <div className="h-1 w-20 bg-[#00ff84] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedSteps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col bg-[#0a0a0a] p-6 rounded-xl border border-white/5 hover:border-[#00ff84]/20 group transition-colors"
                >
                    <span className="text-[#00ff84] font-orbitron font-bold text-lg mb-2">Step {index + 1}</span>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00ff84] transition-colors">{step.title}</h3>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Reward Plan */}
      <section className="w-full px-6 lg:px-12">
         <div className="bg-gradient-to-br from-yellow-900/20 to-black border border-yellow-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 border border-yellow-500/30">
                    <Gift className="text-yellow-500" size={40} />
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Reward Plan</h2>
                    <p className="text-gray-300 leading-relaxed max-w-2xl">
                        Candidates who achieve <span className="text-yellow-500 font-bold">80% or higher</span> in the pre-examination may be eligible for a complimentary gift, subject to availability. The gift will be dispatched within 45–60 days with tracking details shared via email.
                    </p>
                </div>
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <div className="text-center mt-20">
          <p className="text-gray-400 mb-6">Ready to Start Your Certification Journey?</p>
          <Link to="/contact">
            <button className="bg-[#00ff84] hover:bg-[#00cc6a] text-black text-lg font-bold py-3 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(0,255,132,0.4)] hover:scale-105">
                Contact Us Today
            </button>
          </Link>
      </div>

    </div>
  );
};

export default Process;