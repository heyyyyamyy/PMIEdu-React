import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#050505] pt-24 pb-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ff84]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy <span className="text-[#00ff84]">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            At PMIEdu, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.
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
                <Database size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>We collect information to provide better services to all our users. The types of information we collect include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, etc., when you register for courses or contact us.</li>
                <li><strong>Payment Information:</strong> Credit card details and billing addresses are processed securely by our third-party payment processors. We do not store sensitive payment information on our servers.</li>
                <li><strong>Usage Data:</strong> Information on how you interact with our website, such as IP address, browser type, pages visited, and time spent on pages.</li>
              </ul>
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
                <Eye size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>The information we collect is used for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide, operate, and maintain our services.</li>
                <li>To improve, personalize, and expand our website content.</li>
                <li>To understand and analyze how you use our website.</li>
                <li>To communicate with you, either directly or through one of our partners, including for customer service, updates, and marketing purposes.</li>
                <li>To process your transactions and manage your certification progress.</li>
              </ul>
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
                <Lock size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Data Security</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
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
                <Shield size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Your Rights</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The right to access – You have the right to request copies of your personal data.</li>
                <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
                <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
              </ul>
              <p className="mt-4">
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at <a href="mailto:privacy@pmiedu.com" className="text-[#00ff84] hover:underline">privacy@pmiedu.com</a>.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;