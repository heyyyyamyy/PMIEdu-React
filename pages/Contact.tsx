import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, X, ChevronDown, Check } from 'lucide-react';

const DEFAULT_CERT_OPTIONS = [
  "Project Management Professional (PMP)®",
  "Certified Associate in Project Management (CAPM)®",
  "PMI Agile Certified Practitioner (PMI-ACP)®",
  "PRINCE2® Foundation",
  "PRINCE2® Practitioner",
  "Certified ScrumMaster (CSM)",
  "Professional Scrum Master (PSM I)",
  "Certified Scrum Product Owner (CSPO)",
  "SAFe® Agilist (SA)",
  "Certified Kubernetes Administrator (CKA)",
  "AWS Certified Solutions Architect",
  "Microsoft Azure Fundamentals (AZ-900)",
  "Google Cloud Professional Cloud Architect",
  "Certified Information Systems Security Professional (CISSP)",
  "Certified Ethical Hacker (CEH)",
  "CompTIA Security+",
  "Certified Information Security Manager (CISM)",
  "Certified in Risk and Information Systems Control (CRISC)",
  "ITIL® 4 Foundation",
  "ITIL® 4 Managing Professional",
  "Six Sigma Green Belt",
  "Six Sigma Black Belt",
  "Lean Six Sigma Master Black Belt",
  "Certified Business Analysis Professional (CBAP)®",
  "Entry Certificate in Business Analysis (ECBA)™",
  "Certification of Capability in Business Analysis (CCBA)®",
  "Certified Data Management Professional (CDMP)",
  "Administrative Manager",
  "Certified Administrative Professional",
  "Certified Cost Engineer",
  "Certified Cost Estimator / Analyst",
  "Certified Construction Industry Financial Professional",
  "Certified Construction Manager",
  "Certified Construction Professional",
  "Certified Management Accountant",
  "Certified Manager Certification",
  "Certified Mechanical Engineer",
  "Certified Piping Engineer",
  "Certified Professional in Supply Management",
  "Certified Purchasing Professional",
  "Certified Purchasing Manager",
  "Certified in Production and Inventory Management",
  "Certified in Financial Management",
  "Certified Quality Auditor",
  "Certified Quality Engineer",
  "Certified Site Supervisor",
  "Certified Sales Executive",
  "Certified Safety Professional",
  "Certified Sales Professional",
  "Certified Supply Chain Professional",
  "Certified Survey Technician",
  "Certified Land Surveyor",
  "Certified Estimating Professional",
  "Certified Electrical Engineer",
  "Construction Health and Safety Technician",
  "Certified Information Systems Auditor",
  "Facility Management Professional",
  "ITIL Foundation Certification",
  "Lean Six Sigma Green Belt",
  "LEED AP Building Design + Construction",
  "Master Project Manager",
  "Master Quality Manager",
  "Maintenance Management Professional",
  "Microsoft Certified: Modern Desktop Administrator",
  "Professional Certified Marketer",
  "Professional Engineer – Electrical",
  "Professional Engineer – Mechanical",
  "Program Management Professional",
  "Project Management Professional",
  "Quality Control Inspector Certification",
  "Scrum Master Certification",
  "Senior Professional in Human Resources",
  "Six Sigma Certification",
  "Welding Inspector Certification",
  "CompTIA A+",
  "Cisco Certified Network Associate",
  "Engineer in Training Certification",
  "OSHA Safety Certificate",
  "Certified Inventory Control Supervisor",
  "Certified Store Manager",
  "Certified Professional Supervisor",
  "Microsoft Project Professional Certification",
  "Oracle Primavera P6 Professional Project Management Certification",
  "International Accredited Business Accountant",
  "Certified Resume Specialist: Accounting and Finance",
  "Certified Logistics Associate",
  "Microsoft Certified: Azure Developer Associate",
  "Oracle Certified Professional, Java SE Programmer",
  "AWS Certified Developer – Associate",
  "Google Associate Cloud Engineer",
  "Drafter Certification",
  "AutoCAD Certified Professional",
  "Certified Design Drafter",
  "Certified Maintenance Technician",
  "TOGAF",
  "Governance, Risk, and Compliance Professional Certification",
  "Corporate Compliance & Ethics Professional",
  "ISO 37301 Lead Auditor",
  "ISO 9001 Lead Auditor",
  "Human Resources Business Professional",
  "Certified Calibration Technician",
  "ISO/IEC 17025 Internal Auditor Certification",
  "Certified Piping Design Engineer",
  "SP3D Piping Design Certification",
  "Certified Logistics Professional",
  "DCS System Design & Configuration Certification",
  "Project Management for Control Systems Projects",
  "Foreman Certification",
  "EPA Amusement Operators Safety Certification",
  "Occupational Health and Safety Technologist",
  "Industrial Safety Management Certification",
  "Certified Operations Manager",
  "Certified Service Manager",
  "Certified Pipeline Integrity Engineer",
  "Certified Welding Inspector",
  "Pipeline Risk Assessment & Emergency Planning Certification",
  "Certified Maintenance & Reliability Professional",
  "Microsoft Office Specialist Master Certification",
  "Certified Document Consultant",
  "Safety Trained Supervisor",
  "Juniper Networks Certified Associate",
  "CompTIA Network+",
  "AWS Certified Advanced Networking – Specialty",
  "Chartered Credit Analyst",
  "Credit Risk Certification",
  "Certified Pricing Professional",
  "Certified Financial Modelling & Valuation Analyst",
  "Certified Revenue Management Executive",
  "Certified Agile Developer",
  "AutoCAD Civil 3D Certification",
  "Certified Research Analyst",
  "Six Sigma Green Belt Certification",
  "Certified Software Quality Analyst",
  "ISTQB Advanced Level – Test Manager",
  "Certified Bridge Inspector",
  "AutoCAD Civil 3D / BIM for Bridge Design Certification",
  "Certified Technical Specialist",
  "Certified Customer Success Manager",
  "Salesforce Certified Administrator",
  "Physical Security Professional",
  "Leadership and Strategic Management Certificate",
  "ISO 37301 Lead Implementer",
  "Certified Risk and Compliance Management Professional",
  "Autodesk Certified Professional – Revit",
  "Certified BIM Specialist",
  "Certified Digital Construction Professional",
  "Certified Fire Inspector",
  "Certified Fire Protection Specialist",
  "Certified Materials Professional",
  "ISO 17025 Certification",
  "ISTQB Advanced Level Test Analyst",
  "Certified Construction Supervisor",
  "Certified Interior Project Management Professional",
  "SAP Certified Application Associate",
  "SAP Certified Application Professional",
  "Apple Certified iOS App Developer",
  "iOS App Development with Swift Certification",
  "Certified Mobile Application Developer",
  "Certified Data Privacy Solutions Engineer",
  "Data Governance and Stewardship Professional",
  "Certified Information Management Professional",
  "Other"
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dynamic Site Config State
  const [contactConfig, setContactConfig] = useState({
    phone: '+91-7965267794',
    whatsapp: '+91-8604873445'
  });
  const [availableCerts, setAvailableCerts] = useState<string[]>(DEFAULT_CERT_OPTIONS);

  // Load Config from LocalStorage
  useEffect(() => {
    const storedConfig = localStorage.getItem('pmi_site_config');
    if (storedConfig) {
      try {
        const parsed = JSON.parse(storedConfig);
        if (parsed.certifications && parsed.certifications.length > 0) {
          setAvailableCerts(parsed.certifications);
        }
        if (parsed.contact) {
          setContactConfig(parsed.contact);
        }
      } catch (e) {
        console.error("Failed to load site config", e);
      }
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleCert = (cert: string) => {
    if (selectedCerts.includes(cert)) {
      setSelectedCerts(selectedCerts.filter(c => c !== cert));
    } else {
      setSelectedCerts([...selectedCerts, cert]);
    }
    setSearchQuery('');
  };

  const removeCert = (cert: string) => {
    setSelectedCerts(selectedCerts.filter(c => c !== cert));
  };

  const filteredOptions = availableCerts.filter(cert => 
    cert.toLowerCase().includes(searchQuery.toLowerCase()) && 
    !selectedCerts.includes(cert)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. SAVE TO LOCAL STORAGE (Database simulation)
    const newSubmission = {
        id: Date.now().toString(), // Simple unique ID
        submittedAt: new Date().toLocaleString(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        certifications: selectedCerts.length > 0 ? selectedCerts : ['None specified']
    };

    const existingData = localStorage.getItem('pmi_contact_submissions');
    const submissions = existingData ? JSON.parse(existingData) : [];
    submissions.push(newSubmission);
    localStorage.setItem('pmi_contact_submissions', JSON.stringify(submissions));

    // 3. SHOW SUCCESS UI
    setShowSuccess(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
    setSelectedCerts([]);
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] pt-24 pb-20 relative overflow-hidden">
       {/* Background decorative blob */}
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00ff84]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info Side */}
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in <span className="text-[#00ff84]">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12">
                Have questions about our certifications or need support? Our team is here to help you 24/7.
            </p>

            <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center shrink-0">
                        <MapPin className="text-[#00ff84]" size={20} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg">Visit Us</h3>
                        <p className="text-gray-400 max-w-xs">5th Floor, NBP Green Heights, C-69, Bandra Kurla Complex Rd, opposite to MCA Club, G Block BKC, Bandra East, Mumbai, Maharashtra 400051</p>
                    </div>
                </div>
                
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center shrink-0">
                        <Mail className="text-[#00ff84]" size={20} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg">Email Us</h3>
                        <p className="text-gray-400">sales@pmiedu.com</p>
                        <p className="text-gray-400">grievance@pmiedu.com</p>
                        <p className="text-gray-400">support@pmiedu.com</p>
                        <p className="text-gray-400">admission@pmiedu.com</p>
                        <p className="text-gray-400">info@pmiedu.com</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center shrink-0">
                        <Phone className="text-[#00ff84]" size={20} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg">Call Us</h3>
                        <p className="text-gray-400">{contactConfig.phone}</p>
                        <p className="text-gray-400">{contactConfig.whatsapp} (WhatsApp)</p>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Form Side - UPDATED */}
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#121212] border border-white/5 p-8 md:p-10 rounded-3xl"
        >
            <h2 className="text-2xl font-orbitron font-bold text-[#00ff84] mb-8 tracking-wide">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#00ff84]">First Name *</label>
                        <input 
                            type="text" 
                            className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ff84] focus:ring-1 focus:ring-[#00ff84] transition-all" 
                            placeholder="" 
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#00ff84]">Last Name *</label>
                        <input 
                            type="text" 
                            className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ff84] focus:ring-1 focus:ring-[#00ff84] transition-all" 
                            placeholder="" 
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            required
                        />
                    </div>
                </div>
                
                {/* Contact Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#00ff84]">Email Address *</label>
                        <input 
                            type="email" 
                            className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ff84] focus:ring-1 focus:ring-[#00ff84] transition-all" 
                            placeholder="" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#00ff84]">Phone Number *</label>
                        <input 
                            type="tel" 
                            className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ff84] focus:ring-1 focus:ring-[#00ff84] transition-all" 
                            placeholder="" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            required
                        />
                    </div>
                </div>

                {/* Certification Multi-Select */}
                <div className="space-y-2 relative" ref={dropdownRef}>
                    <label className="text-sm font-medium text-[#00ff84]">Certification of Interest</label>
                    
                    <div 
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg p-2 min-h-[52px] flex flex-wrap gap-2 cursor-text focus-within:border-[#00ff84] focus-within:ring-1 focus-within:ring-[#00ff84] transition-all"
                        onClick={() => { setIsDropdownOpen(true); }}
                    >
                        {selectedCerts.map(cert => (
                            <span key={cert} className="bg-[#00ff84]/20 border border-[#00ff84]/50 text-[#00ff84] text-xs font-medium px-3 py-1.5 rounded-md flex items-center gap-1.5">
                                {cert}
                                <button onClick={(e) => { e.stopPropagation(); removeCert(cert); }} className="hover:text-white transition-colors">
                                    <X size={14} />
                                </button>
                            </span>
                        ))}
                        <input 
                            type="text" 
                            className="bg-transparent border-none outline-none text-white text-sm flex-grow min-w-[150px] py-1.5"
                            placeholder={selectedCerts.length === 0 ? "Search certifications..." : ""}
                            value={searchQuery}
                            onChange={(e) => { setSearchQuery(e.target.value); setIsDropdownOpen(true); }}
                            onFocus={() => setIsDropdownOpen(true)}
                        />
                        <div className="ml-auto flex items-center pr-2 text-gray-500">
                           <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                    </div>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 w-full z-50 mt-2 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-2xl max-h-60 overflow-y-auto"
                                style={{ scrollbarWidth: 'thin' }}
                            >
                                {filteredOptions.length > 0 ? (
                                    filteredOptions.map(option => (
                                        <button
                                            key={option}
                                            onClick={() => toggleCert(option)}
                                            className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-[#00ff84] hover:text-black transition-colors flex items-center justify-between group border-b border-white/5 last:border-0"
                                        >
                                            {option}
                                            {selectedCerts.includes(option) && <Check size={16} className="text-[#00ff84] group-hover:text-black" />}
                                        </button>
                                    ))
                                ) : (
                                    <div className="px-4 py-3 text-sm text-gray-500 italic">No matching certifications found</div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <button type="submit" className="w-full bg-[#00ff84] hover:bg-[#00cc6a] text-black font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,132,0.3)] hover:shadow-[0_0_30px_rgba(0,255,132,0.5)] transform hover:-translate-y-1 mt-4">
                    <Send size={18} />
                    Send Message
                </button>
            </form>
        </motion.div>

        {/* Success Popup */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setShowSuccess(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#121212] border border-[#00ff84]/30 p-8 rounded-2xl max-w-md w-full text-center relative shadow-[0_0_30px_rgba(0,255,132,0.15)]"
                onClick={e => e.stopPropagation()}
              >
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-white"
                >
                  <X size={20} />
                </button>
                
                <div className="w-16 h-16 bg-[#00ff84]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-[#00ff84]" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Your Response Has Been Submitted</h3>
                <p className="text-gray-400 mb-6">
                  We have received your details and our team will get back to you shortly.
                </p>
                
                <button
                  onClick={() => setShowSuccess(false)}
                  className="bg-[#00ff84] hover:bg-[#00cc6a] text-black font-bold py-3 px-8 rounded-full transition-colors w-full"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Contact;