import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, CheckSquare, Scale } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#050505] pt-24 pb-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00ff84]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of <span className="text-[#00ff84]">Service</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Welcome to PMIEdu. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
          </p>
          <p className="text-gray-500 text-sm mt-4">Last Updated: October 26, 2023</p>
        </motion.div>

        <div className="space-y-12">
          {/* Section 1 */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#121212] p-8 rounded-2xl border border-white/5 hover:border-[#00ff84]/30 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#00ff84]/10 rounded-lg flex items-center justify-center text-[#00ff84]">
                <CheckSquare size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the website accordingly. PMIEdu only grants use and access of this website, its products, and its services to those who have accepted its terms.
              </p>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#121212] p-8 rounded-2xl border border-white/5 hover:border-[#00ff84]/30 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#00ff84]/10 rounded-lg flex items-center justify-center text-[#00ff84]">
                <FileText size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                You agree that all materials, products, and services provided on this website are the property of PMIEdu, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the PMIEdu’s intellectual property in any way, including electronic, digital, or new trademark registrations.
              </p>
            </div>
          </motion.section>

           {/* Section 3 */}
           <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#121212] p-8 rounded-2xl border border-white/5 hover:border-[#00ff84]/30 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#00ff84]/10 rounded-lg flex items-center justify-center text-[#00ff84]">
                <AlertCircle size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">User Accounts</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password.
              </p>
              <p>
                If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly. We reserve all rights to terminate accounts, edit or remove content and cancel orders at our sole discretion.
              </p>
            </div>
          </motion.section>

           {/* Section 4 */}
           <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#121212] p-8 rounded-2xl border border-white/5 hover:border-[#00ff84]/30 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#00ff84]/10 rounded-lg flex items-center justify-center text-[#00ff84]">
                <Scale size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                PMIEdu is not liable for any damages that may occur to you as a result of your misuse of our website. PMIEdu reserves the right to edit, modify, and change this Agreement at any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between PMIEdu and the user, and this supersedes and replaces all prior agreements regarding the use of this website.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;