import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Edit2, Save, X, Search, Database, Eye, ChevronLeft, ChevronRight, Calendar, Mail, Phone as PhoneIcon, Award, User, AlertTriangle, Settings, Plus, MessageCircle } from 'lucide-react';

// Default Data for fallback initialization in Admin
const DEFAULT_CERTS = [
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

interface Submission {
  id: string;
  submittedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  certifications: string[];
}

const ContactResponses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'responses' | 'settings'>('responses');
  
  // --- SUBMISSIONS STATE ---
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Partial<Submission>>({});
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // --- SETTINGS STATE ---
  const [siteConfig, setSiteConfig] = useState({
    contact: {
      phone: '+91-7965267794',
      whatsapp: '+91-8604873445'
    },
    certifications: DEFAULT_CERTS
  });
  const [newCertInput, setNewCertInput] = useState('');
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Load Data on Mount
  useEffect(() => {
    const loadData = () => {
      // Load Submissions
      const storedData = localStorage.getItem('pmi_contact_submissions');
      if (storedData) {
        try {
          const parsed = JSON.parse(storedData);
          const sorted = parsed.sort((a: Submission, b: Submission) => 
            new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
          );
          setSubmissions(sorted);
        } catch (e) { console.error(e); }
      }

      // Load Site Config
      const storedConfig = localStorage.getItem('pmi_site_config');
      if (storedConfig) {
        try {
          setSiteConfig(JSON.parse(storedConfig));
        } catch(e) { console.error(e); }
      }
    };
    loadData();
    // Poll for submission updates only
    const interval = setInterval(() => {
         const storedData = localStorage.getItem('pmi_contact_submissions');
         if (storedData) {
            try {
              const parsed = JSON.parse(storedData);
              const sorted = parsed.sort((a: Submission, b: Submission) => 
                new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
              );
              // Only update if length changed to avoid jitter, or deep check in real app
              setSubmissions(prev => prev.length !== sorted.length ? sorted : prev);
            } catch (e) {}
         }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- SUBMISSIONS LOGIC ---
  const filteredSubmissions = submissions.filter(sub => 
    sub.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.phone.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);
  const currentItems = filteredSubmissions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const promptDelete = (id: string) => setDeleteId(id);

  const executeDelete = () => {
    if (!deleteId) return;
    const updated = submissions.filter(s => s.id !== deleteId);
    setSubmissions(updated);
    localStorage.setItem('pmi_contact_submissions', JSON.stringify(updated));
    if (selectedSubmission?.id === deleteId) closeModal();
    setDeleteId(null);
  };

  const openModal = (submission: Submission, editMode = false) => {
    setSelectedSubmission(submission);
    setEditForm({ ...submission });
    setIsEditing(editMode);
  };

  const closeModal = () => {
    setSelectedSubmission(null);
    setIsEditing(false);
    setEditForm({});
  };

  const handleSaveSubmission = () => {
    if (!selectedSubmission) return;
    const updatedSubmissions = submissions.map(sub => 
      sub.id === selectedSubmission.id ? { ...sub, ...editForm } as Submission : sub
    );
    setSubmissions(updatedSubmissions);
    localStorage.setItem('pmi_contact_submissions', JSON.stringify(updatedSubmissions));
    setSelectedSubmission({ ...selectedSubmission, ...editForm } as Submission);
    setIsEditing(false);
  };

  // --- SETTINGS LOGIC ---
  const saveConfig = () => {
    localStorage.setItem('pmi_site_config', JSON.stringify(siteConfig));
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 2000);
  };

  const addCertification = () => {
    if (newCertInput.trim() === '') return;
    setSiteConfig(prev => ({
      ...prev,
      certifications: [newCertInput, ...prev.certifications]
    }));
    setNewCertInput('');
  };

  const removeCertification = (certToRemove: string) => {
    setSiteConfig(prev => ({
      ...prev,
      certifications: prev.certifications.filter(c => c !== certToRemove)
    }));
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] pt-24 pb-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00ff84]/10 flex items-center justify-center text-[#00ff84]">
                 <Database size={20} />
              </div>
              Admin Dashboard
            </h1>
          </div>
          
          <div className="flex bg-[#121212] p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('responses')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'responses' ? 'bg-[#00ff84] text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Responses
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'settings' ? 'bg-[#00ff84] text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Settings size={16} /> Website Settings
            </button>
          </div>
        </div>

        {/* --- SETTINGS TAB --- */}
        {activeTab === 'settings' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Contact Info Settings */}
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                 <h2 className="text-xl font-bold text-white flex items-center gap-2">
                   <PhoneIcon size={20} className="text-[#00ff84]" /> Contact Information
                 </h2>
                 <button 
                  onClick={saveConfig}
                  className="bg-[#00ff84] hover:bg-[#00cc6a] text-black px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors"
                 >
                   <Save size={16} /> {settingsSaved ? 'Saved!' : 'Save Changes'}
                 </button>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Main Phone Number</label>
                  <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg px-3">
                    <PhoneIcon size={16} className="text-gray-500" />
                    <input 
                      type="text" 
                      value={siteConfig.contact.phone}
                      onChange={(e) => setSiteConfig({...siteConfig, contact: {...siteConfig.contact, phone: e.target.value}})}
                      className="w-full bg-transparent py-3 text-white focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">WhatsApp Number</label>
                  <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg px-3">
                    <MessageCircle size={16} className="text-gray-500" />
                    <input 
                      type="text" 
                      value={siteConfig.contact.whatsapp}
                      onChange={(e) => setSiteConfig({...siteConfig, contact: {...siteConfig.contact, whatsapp: e.target.value}})}
                      className="w-full bg-transparent py-3 text-white focus:outline-none"
                    />
                  </div>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                  <p className="text-yellow-500 text-sm">
                    Note: Updating these numbers will instantly change the displayed numbers on the "Contact Us" page for all visitors.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Manager */}
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-8 flex flex-col h-[600px]">
               <div className="flex items-center justify-between mb-6">
                 <h2 className="text-xl font-bold text-white flex items-center gap-2">
                   <Award size={20} className="text-[#00ff84]" /> Manage Certifications
                 </h2>
                 <span className="text-gray-500 text-sm">{siteConfig.certifications.length} items</span>
               </div>

               {/* Add New */}
               <div className="flex gap-2 mb-6">
                 <input 
                    type="text" 
                    placeholder="Enter new certification name..."
                    value={newCertInput}
                    onChange={(e) => setNewCertInput(e.target.value)}
                    className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00ff84] outline-none"
                 />
                 <button 
                  onClick={addCertification}
                  className="bg-white/10 hover:bg-[#00ff84] hover:text-black text-white p-3 rounded-lg transition-colors"
                 >
                   <Plus size={24} />
                 </button>
               </div>

               {/* List */}
               <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                  {siteConfig.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-[#00ff84]/30 group">
                      <span className="text-sm text-gray-300">{cert}</span>
                      <button 
                        onClick={() => removeCertification(cert)}
                        className="text-gray-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
               </div>
               
               <div className="mt-6 pt-6 border-t border-white/10 flex justify-end">
                  <button 
                    onClick={saveConfig}
                    className="bg-[#00ff84] hover:bg-[#00cc6a] text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors w-full justify-center"
                  >
                    <Save size={18} /> Save Certification Changes
                  </button>
               </div>
            </div>

          </div>
        )}

        {/* --- RESPONSES TAB --- */}
        {activeTab === 'responses' && (
           <>
              {/* Search Bar */}
              <div className="flex justify-end mb-6">
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search by name, email..." 
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                    className="w-full bg-[#121212] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-[#00ff84] focus:ring-1 focus:ring-[#00ff84] transition-all shadow-sm"
                  />
                </div>
              </div>

              {submissions.length === 0 ? (
                 <div className="bg-[#121212] border border-white/5 rounded-2xl p-16 text-center flex flex-col items-center justify-center min-h-[400px]">
                   <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                      <Database className="text-gray-600" size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">No Responses Yet</h3>
                   <p className="text-gray-500 max-w-sm">
                     Submissions from the contact form will appear here. The database is currently empty.
                   </p>
                 </div>
              ) : (
                <div className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-white/[0.02] border-b border-white/10">
                          <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Date Received</th>
                          <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Applicant</th>
                          <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Contact Info</th>
                          <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider">Certifications</th>
                          <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <AnimatePresence mode="wait">
                          {currentItems.map((sub) => (
                            <motion.tr 
                              key={sub.id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="border-b border-white/5 hover:bg-[#00ff84]/[0.02] transition-colors group"
                            >
                              <td className="p-5 text-gray-500 text-sm whitespace-nowrap align-top">
                                {sub.submittedAt.split(',')[0]}
                                <div className="text-xs text-gray-600 mt-1">{sub.submittedAt.split(',')[1]}</div>
                              </td>
                              <td className="p-5 align-top">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-xs font-bold">
                                        {sub.firstName.charAt(0)}{sub.lastName.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-white font-medium">{sub.firstName} {sub.lastName}</div>
                                    </div>
                                </div>
                              </td>
                              <td className="p-5 text-sm align-top">
                                 <div className="flex flex-col gap-1">
                                    <span className="text-gray-300 hover:text-[#00ff84] transition-colors cursor-pointer flex items-center gap-1.5">
                                        <Mail size={12} className="text-gray-600" />
                                        {sub.email}
                                    </span>
                                    <span className="text-gray-400 flex items-center gap-1.5">
                                        <PhoneIcon size={12} className="text-gray-600" />
                                        {sub.phone}
                                    </span>
                                 </div>
                              </td>
                              <td className="p-5 align-top">
                                <div className="flex flex-wrap gap-1.5 max-w-md">
                                  {sub.certifications.slice(0, 2).map((cert, i) => (
                                    <span key={i} className="text-[10px] font-semibold bg-[#00ff84]/10 text-[#00ff84] px-2 py-1 rounded border border-[#00ff84]/20 truncate max-w-[200px]">
                                      {cert}
                                    </span>
                                  ))}
                                  {sub.certifications.length > 2 && (
                                    <span className="text-[10px] font-semibold bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/10">
                                      +{sub.certifications.length - 2} more
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="p-5 text-right align-top">
                                <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                  <button 
                                    onClick={() => openModal(sub, false)}
                                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                    title="View Details"
                                  >
                                    <Eye size={18} />
                                  </button>
                                  <button 
                                    onClick={() => openModal(sub, true)}
                                    className="p-2 text-gray-400 hover:text-[#00ff84] hover:bg-[#00ff84]/10 rounded-lg transition-colors"
                                    title="Edit"
                                  >
                                    <Edit2 size={18} />
                                  </button>
                                  <button 
                                    onClick={() => promptDelete(sub.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                                    title="Delete"
                                  >
                                    <Trash2 size={18} />
                                  </button>
                                </div>
                              </td>
                            </motion.tr>
                          ))}
                        </AnimatePresence>
                      </tbody>
                    </table>
                  </div>
                  
                  {currentItems.length === 0 && searchTerm && (
                      <div className="p-12 text-center text-gray-500">
                          <Search className="mx-auto mb-3 opacity-20" size={40} />
                          <p>No results found for "{searchTerm}"</p>
                      </div>
                  )}

                  {totalPages > 1 && (
                    <div className="border-t border-white/5 p-4 flex items-center justify-between bg-white/[0.01]">
                        <div className="text-xs text-gray-500">
                            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredSubmissions.length)} of {filteredSubmissions.length} entries
                        </div>
                        <div className="flex gap-2">
                            <button 
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft size={16} className="text-white" />
                            </button>
                            {Array.from({ length: totalPages }).map((_, idx) => (
                                 <button
                                    key={idx}
                                    onClick={() => setCurrentPage(idx + 1)}
                                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                                        currentPage === idx + 1 
                                        ? 'bg-[#00ff84] text-black shadow-[0_0_10px_rgba(0,255,132,0.3)]' 
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                                 >
                                    {idx + 1}
                                 </button>
                            ))}
                            <button 
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronRight size={16} className="text-white" />
                            </button>
                        </div>
                    </div>
                  )}
                </div>
              )}
           </>
        )}

      </div>

      {/* MODALS */}
      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setDeleteId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#121212] border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4 text-red-500">
                  <AlertTriangle size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Delete Submission?</h3>
                <p className="text-gray-400 mb-6 text-sm">
                  This action cannot be undone. This will permanently remove the submission from your records.
                </p>
                <div className="flex gap-3 w-full">
                  <button 
                    onClick={() => setDeleteId(null)}
                    className="flex-1 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={executeDelete}
                    className="flex-1 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white transition-colors font-bold shadow-lg shadow-red-900/20"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail / Edit Modal */}
      <AnimatePresence>
        {selectedSubmission && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#121212] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-[#121212] border-b border-white/10 p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    {isEditing ? 'Edit Submission' : 'Submission Details'}
                </h2>
                <div className="flex gap-2">
                    {!isEditing && (
                        <button 
                            onClick={() => setIsEditing(true)}
                            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-[#00ff84] transition-colors"
                        >
                            <Edit2 size={20} />
                        </button>
                    )}
                    <button 
                        onClick={closeModal}
                        className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                
                {/* ID & Date Badge */}
                <div className="flex items-center gap-4 text-xs text-gray-500 font-mono bg-black/30 p-3 rounded-lg border border-white/5">
                    <span>ID: {selectedSubmission.id}</span>
                    <span className="w-px h-3 bg-white/10"></span>
                    <span>Received: {selectedSubmission.submittedAt}</span>
                </div>

                {isEditing ? (
                    // EDIT FORM
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00ff84] uppercase">First Name</label>
                                <input 
                                    value={editForm.firstName}
                                    onChange={e => setEditForm({...editForm, firstName: e.target.value})}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-[#00ff84] outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00ff84] uppercase">Last Name</label>
                                <input 
                                    value={editForm.lastName}
                                    onChange={e => setEditForm({...editForm, lastName: e.target.value})}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-[#00ff84] outline-none"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00ff84] uppercase">Email</label>
                                <input 
                                    value={editForm.email}
                                    onChange={e => setEditForm({...editForm, email: e.target.value})}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-[#00ff84] outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00ff84] uppercase">Phone</label>
                                <input 
                                    value={editForm.phone}
                                    onChange={e => setEditForm({...editForm, phone: e.target.value})}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-[#00ff84] outline-none"
                                />
                            </div>
                        </div>
                        
                         <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-500 text-sm">
                            <p>Note: Certification list editing is disabled in this view to maintain data integrity. Please delete and re-create if major changes are needed.</p>
                        </div>
                    </div>
                ) : (
                    // VIEW DETAILS
                    <div className="space-y-8">
                        {/* Profile Section */}
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-[#00ff84]/20 border border-[#00ff84]/30 flex items-center justify-center text-[#00ff84]">
                                <User size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">{selectedSubmission.firstName} {selectedSubmission.lastName}</h3>
                                <div className="flex flex-col gap-1 mt-1">
                                    <a href={`mailto:${selectedSubmission.email}`} className="text-gray-400 hover:text-[#00ff84] flex items-center gap-2 transition-colors">
                                        <Mail size={14} /> {selectedSubmission.email}
                                    </a>
                                    <a href={`tel:${selectedSubmission.phone}`} className="text-gray-400 hover:text-[#00ff84] flex items-center gap-2 transition-colors">
                                        <PhoneIcon size={14} /> {selectedSubmission.phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Certifications List */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Award size={16} /> Interested Certifications
                            </h4>
                            <div className="bg-black/40 border border-white/5 rounded-xl p-4">
                                <div className="flex flex-wrap gap-2">
                                    {selectedSubmission.certifications.map((cert, i) => (
                                        <div key={i} className="bg-[#00ff84]/10 border border-[#00ff84]/20 text-[#00ff84] px-3 py-1.5 rounded-lg text-sm font-medium">
                                            {cert}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="bg-[#0a0a0a] border-t border-white/10 p-6 flex justify-end gap-3 rounded-b-2xl">
                {isEditing ? (
                    <>
                        <button 
                            onClick={() => setIsEditing(false)}
                            className="px-6 py-2 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={handleSaveSubmission}
                            className="px-6 py-2 rounded-lg bg-[#00ff84] text-black font-bold hover:bg-[#00cc6a] transition-colors flex items-center gap-2"
                        >
                            <Save size={18} /> Save Changes
                        </button>
                    </>
                ) : (
                    <button 
                        onClick={closeModal}
                        className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                        Close
                    </button>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ContactResponses;