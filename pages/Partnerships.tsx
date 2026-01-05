import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Briefcase, Building, Users, Mail } from 'lucide-react';

const partnershipsData = [
  {
    name: "Naukri.com",
    tagline: "India’s Leading Career Platform",
    description: "Through our partnership with Naukri.com, we provide job seekers and premium subscribers with access to exclusive certification programs, carefully curated to improve employability and enhance career readiness. This collaboration supports thousands of active learners with targeted training in Project Management, Agile, Cybersecurity, Cloud Computing, and more—ensuring they stay relevant in a fast-changing job landscape."
  },
  {
    name: "Indeed.com",
    tagline: "Global Job & Hiring Marketplace",
    description: "Our association with Indeed.com allows us to offer tailored certification and upskilling opportunities to professionals actively seeking growth or career transitions. We work closely with Indeed’s team to design value-driven learning bundles that align with top job trends and help learners strengthen their profiles with globally recognized credentials, improving hiring potential and career progression."
  },
  {
    name: "The Knowledge Academy",
    tagline: "Global Training & Certification Leader",
    description: "In collaboration with The Knowledge Academy, we co-create and deliver high-quality, globally compliant courseware for various professional domains including Project Management, IT, and Agile practices. This partnership allows us to combine our instructional expertise with their international reach, enabling broader access to PMI-certified training, cloud technology programs, and cyber-risk certifications for learners across continents."
  },
  {
    name: "Tata Group",
    tagline: "Empowering Internal Capabilities Across Sectors",
    description: "Working with multiple companies under the Tata Group umbrella, we provide customized internal training and employee development programs that address project management maturity, agile transformation, and digital readiness. Our PMI-certified programs are designed to align with Tata’s operational excellence initiatives, ensuring that their employees are equipped to manage complex projects, lead agile teams, and drive innovation across departments."
  },
  {
    name: "Infosys",
    tagline: "Strengthening Tech Delivery Through Certification",
    description: "Our training partnership with Infosys focuses on building strong project management capabilities and agile readiness among their delivery teams. We provide structured training tracks for fresh graduates, lateral hires, and project managers, enabling them to earn certifications like PMP®, PMI-ACP®, and AWS Certified Solutions Architect. The goal is to strengthen Infosys’s delivery excellence and ensure their teams remain competitive and globally aligned."
  }
];

const trainingFeatures = [
  "Bulk Enrollment Discounts",
  "Custom Course Content & Case Studies",
  "On-Demand & Live Virtual Training",
  "LMS Access for Internal Tracking",
  "Certification Path Mapping for Employees",
  "Dedicated Account Manager & Post-Training Support"
];

const Partnerships: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#050505] pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 mb-20">
        <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden text-center">
             {/* Background decorative blob */}
            <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-[#00ff84]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Our Corporate Partnerships & <br/>
                    <span className="text-[#00ff84]">Enterprise Training Solutions</span>
                </h1>
                <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="h-px w-12 bg-[#00ff84]" />
                    <span className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Trusted by Industry Leaders</span>
                    <div className="h-px w-12 bg-[#00ff84]" />
                </div>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    At PMIUS Services, we take pride in being the training partner of choice for some of the world’s most respected organizations. Through our corporate tie-ups, we offer customized certification programs, bulk enrollment discounts, and tailored learning paths to empower both employees and customers of leading companies.
                </p>
                <p className="text-gray-400">
                    We understand that every organization has unique learning needs, which is why we offer flexible, scalable, and industry-relevant solutions that align with business goals.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Companies We Work With */}
      <section className="px-6 lg:px-12 mb-24">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Companies We Work With</h2>
            <div className="h-1 w-20 bg-[#00ff84] mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
            {partnershipsData.map((partner, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#121212] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-[#00ff84]/30 transition-all flex flex-col md:flex-row gap-8 items-start"
                >
                    <div className="w-16 h-16 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0">
                        <Briefcase className="text-[#00ff84]" size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{partner.name}</h3>
                        <p className="text-[#00ff84] text-sm font-semibold uppercase tracking-wider mb-4">{partner.tagline}</p>
                        <p className="text-gray-400 leading-relaxed">{partner.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Customized Training - Refactored to Centered Layout */}
      <section className="px-6 lg:px-12 mb-24">
         <div className="max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Customized Training for <span className="text-[#00ff84]">Corporate Teams</span>
                </h2>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
                    We offer personalized training packages for organizations of all sizes. Our programs cover domains like Project Management, Agile, Cloud, Cybersecurity, ITIL®, and more—helping your team stay future-ready.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    {trainingFeatures.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 bg-[#121212] p-4 rounded-xl border border-white/5 hover:border-[#00ff84]/30 transition-colors">
                            <CheckCircle className="text-[#00ff84] shrink-0" size={20} />
                            <span className="text-white">{feature}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
         </div>
      </section>

      {/* CTA / Partnership Inquiry */}
      <section className="px-6 lg:px-12">
        <div className="bg-gradient-to-r from-[#121212] to-[#0a0a0a] border border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff84]/5 rounded-full blur-[60px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00ff84]/5 rounded-full blur-[60px]" />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-3xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Looking to Partner With Us?</h2>
                <p className="text-gray-400 text-lg mb-0 leading-relaxed">
                    Are you a business, educational institution, staffing agency, or job portal looking to add value-added certification training to your offerings? We are actively seeking new partners to expand our mission of accessible, high-quality certification training.
                </p>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;