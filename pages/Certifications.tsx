import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Clock, ArrowUpRight, Filter, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const allCertifications = [
  {
    id: 1,
    title: "Project Management Professional (PMP)®",
    rating: "4.9",
    reviews: "12.5k",
    duration: "35 Hours",
    level: "Advanced",
    tags: ["Best Seller", "PMI"],
    color: "from-blue-600 to-cyan-400",
    category: "Project Management"
  },
  {
    id: 2,
    title: "Certified Associate in Project Management (CAPM)®",
    rating: "4.8",
    reviews: "8.2k",
    duration: "23 Hours",
    level: "Beginner",
    tags: ["Popular", "PMI"],
    color: "from-purple-600 to-pink-400",
    category: "Project Management"
  },
  {
    id: 3,
    title: "PMI Agile Certified Practitioner (PMI-ACP)®",
    rating: "4.9",
    reviews: "5.4k",
    duration: "21 Hours",
    level: "Intermediate",
    tags: ["Agile", "PMI"],
    color: "from-orange-500 to-yellow-400",
    category: "Agile"
  },
  {
    id: 4,
    title: "Disciplined Agile® Scrum Master (DASM)",
    rating: "4.7",
    reviews: "3.1k",
    duration: "14 Hours",
    level: "Beginner",
    tags: ["Scrum", "PMI"],
    color: "from-green-600 to-emerald-400",
    category: "Agile"
  },
  {
    id: 5,
    title: "Disciplined Agile® Senior Scrum Master (DASSM)",
    rating: "4.8",
    reviews: "2.1k",
    duration: "14 Hours",
    level: "Intermediate",
    tags: ["Scrum", "PMI"],
    color: "from-green-500 to-teal-400",
    category: "Agile"
  },
  {
    id: 6,
    title: "Disciplined Agile® Value Stream Consultant (DAVSC)",
    rating: "4.9",
    reviews: "850",
    duration: "21 Hours",
    level: "Advanced",
    tags: ["Consulting", "PMI"],
    color: "from-red-500 to-orange-400",
    category: "Agile"
  },
  {
    id: 7,
    title: "Disciplined Agile® Coach (DAC)",
    rating: "5.0",
    reviews: "620",
    duration: "21 Hours",
    level: "Expert",
    tags: ["Coaching", "PMI"],
    color: "from-red-600 to-pink-500",
    category: "Agile"
  },
  {
    id: 8,
    title: "Program Management Professional (PgMP)®",
    rating: "4.8",
    reviews: "1.2k",
    duration: "30 Hours",
    level: "Expert",
    tags: ["Program Mgmt", "PMI"],
    color: "from-indigo-600 to-blue-500",
    category: "Program Management"
  },
  {
    id: 9,
    title: "Portfolio Management Professional (PfMP)®",
    rating: "4.9",
    reviews: "950",
    duration: "25 Hours",
    level: "Expert",
    tags: ["Portfolio Mgmt", "PMI"],
    color: "from-indigo-800 to-purple-600",
    category: "Portfolio Management"
  },
  {
    id: 10,
    title: "PMI Risk Management Professional (PMI-RMP)®",
    rating: "4.7",
    reviews: "2.5k",
    duration: "20 Hours",
    level: "Advanced",
    tags: ["Risk", "PMI"],
    color: "from-yellow-600 to-orange-500",
    category: "Specialized"
  },
  {
    id: 11,
    title: "PMI Scheduling Professional (PMI-SP)®",
    rating: "4.6",
    reviews: "1.8k",
    duration: "20 Hours",
    level: "Advanced",
    tags: ["Scheduling", "PMI"],
    color: "from-cyan-600 to-blue-400",
    category: "Specialized"
  },
  {
    id: 12,
    title: "PMI Professional in Business Analysis (PMI-PBA)®",
    rating: "4.8",
    reviews: "3.2k",
    duration: "35 Hours",
    level: "Advanced",
    tags: ["Analysis", "PMI"],
    color: "from-teal-600 to-green-400",
    category: "Business Analysis"
  },
  {
    id: 13,
    title: "PMI Construction Professional (PMI-CP)™",
    rating: "4.7",
    reviews: "1.5k",
    duration: "40 Hours",
    level: "Advanced",
    tags: ["Construction", "PMI"],
    color: "from-amber-600 to-yellow-500",
    category: "Industry Specific"
  },
  {
    id: 14,
    title: "Agile Hybrid Project Pro (AHPP)",
    rating: "4.8",
    reviews: "4.1k",
    duration: "12 Hours",
    level: "Intermediate",
    tags: ["Hybrid", "PMI"],
    color: "from-lime-500 to-green-400",
    category: "Agile"
  },
  {
    id: 15,
    title: "Organizational Transformation: Foundation",
    rating: "4.6",
    reviews: "2.2k",
    duration: "10 Hours",
    level: "Beginner",
    tags: ["Transformation", "PMI"],
    color: "from-fuchsia-600 to-pink-400",
    category: "Transformation"
  },
  {
    id: 16,
    title: "Organizational Transformation: Implementation",
    rating: "4.7",
    reviews: "1.1k",
    duration: "15 Hours",
    level: "Intermediate",
    tags: ["Transformation", "PMI"],
    color: "from-fuchsia-700 to-purple-500",
    category: "Transformation"
  },
  {
    id: 17,
    title: "Certified ScrumMaster (CSM)®",
    rating: "4.9",
    reviews: "15k+",
    duration: "16 Hours",
    level: "Beginner",
    tags: ["Scrum Alliance"],
    color: "from-orange-600 to-red-400",
    category: "Scrum"
  },
  {
    id: 18,
    title: "Certified Scrum Product Owner (CSPO)®",
    rating: "4.8",
    reviews: "10k+",
    duration: "16 Hours",
    level: "Intermediate",
    tags: ["Product Owner"],
    color: "from-orange-500 to-amber-400",
    category: "Scrum"
  },
  {
    id: 19,
    title: "SAFe® 6.0 Agilist",
    rating: "4.7",
    reviews: "8.5k",
    duration: "16 Hours",
    level: "Advanced",
    tags: ["Scaled Agile"],
    color: "from-blue-700 to-indigo-500",
    category: "Scaled Agile"
  },
  {
    id: 20,
    title: "PRINCE2® Foundation",
    rating: "4.6",
    reviews: "9.2k",
    duration: "20 Hours",
    level: "Beginner",
    tags: ["Axelos"],
    color: "from-red-700 to-red-500",
    category: "Project Management"
  },
  {
    id: 21,
    title: "PRINCE2® Practitioner",
    rating: "4.7",
    reviews: "6.5k",
    duration: "25 Hours",
    level: "Advanced",
    tags: ["Axelos"],
    color: "from-red-800 to-rose-600",
    category: "Project Management"
  },
  {
    id: 22,
    title: "ITIL® 4 Foundation",
    rating: "4.8",
    reviews: "18k+",
    duration: "16 Hours",
    level: "Beginner",
    tags: ["IT Service"],
    color: "from-purple-700 to-indigo-600",
    category: "IT Service Mgmt"
  },
  {
    id: 23,
    title: "Lean Six Sigma Green Belt",
    rating: "4.7",
    reviews: "5.5k",
    duration: "30 Hours",
    level: "Intermediate",
    tags: ["Quality"],
    color: "from-green-700 to-lime-500",
    category: "Quality Mgmt"
  },
  {
    id: 24,
    title: "Lean Six Sigma Black Belt",
    rating: "4.9",
    reviews: "2.8k",
    duration: "45 Hours",
    level: "Expert",
    tags: ["Quality"],
    color: "from-emerald-800 to-green-600",
    category: "Quality Mgmt"
  }
];

const Certifications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(allCertifications.map(c => c.category)))];

  const filteredCertifications = allCertifications.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          cert.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full min-h-screen bg-[#050505] pt-24 pb-20">
      <div className="w-full px-6 lg:px-12 mb-12">
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
            Explore <span className="text-[#00ff84]">Certifications</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mb-8">
            Browse our extensive catalog of {allCertifications.length}+ PMI-accredited and industry-standard courses designed to fast-track your career.
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between bg-[#121212] p-6 rounded-2xl border border-white/5 mb-12">
            
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input 
                    type="text" 
                    placeholder="Search for a certification..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#050505] border border-white/10 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#00ff84] transition-colors"
                />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                            selectedCategory === category 
                            ? 'bg-[#00ff84] text-black' 
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {filteredCertifications.map((course, index) => (
                <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-[#121212] rounded-2xl overflow-hidden border border-white/5 hover:border-[#00ff84] transition-all duration-300 flex flex-col h-full"
                >
                    {/* Course Card Top Gradient */}
                    <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                    
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex gap-2 mb-4 flex-wrap">
                            {course.tags.map((tag, i) => (
                                <span key={i} className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-[#00ff84] transition-colors min-h-[3.5rem]">
                            {course.title}
                        </h3>

                        <div className="mt-auto space-y-4">
                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <div className="flex items-center gap-1 text-[#FFD700]">
                                    <Star size={16} fill="#FFD700" />
                                    <span className="font-bold text-white">{course.rating}</span>
                                    <span className="text-gray-500">({course.reviews})</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-white/10">
                                <div className="flex items-center gap-2">
                                    <Clock size={16} />
                                    {course.duration}
                                </div>
                                <span className={`px-2 py-0.5 rounded text-xs border ${
                                    course.level === 'Beginner' ? 'border-green-500/30 text-green-400' :
                                    course.level === 'Intermediate' ? 'border-yellow-500/30 text-yellow-400' :
                                    'border-red-500/30 text-red-400'
                                }`}>
                                    {course.level}
                                </span>
                            </div>
                        </div>
                    </div>

                    <Link to="/contact" className="block mt-auto">
                        <div className="p-4 bg-white/5 flex items-center justify-between group-hover:bg-[#00ff84] transition-colors duration-300 cursor-pointer">
                            <span className="font-bold text-white group-hover:text-black text-sm">Enroll Now</span>
                            <ArrowUpRight size={18} className="text-white group-hover:text-black transform group-hover:rotate-45 transition-transform" />
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>

        {filteredCertifications.length === 0 && (
            <div className="text-center py-20">
                <div className="w-16 h-16 bg-[#121212] rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                    <BookOpen className="text-gray-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No certifications found</h3>
                <p className="text-gray-500">Try adjusting your search or category filter.</p>
                <button 
                    onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                    className="mt-6 text-[#00ff84] hover:underline"
                >
                    Clear all filters
                </button>
            </div>
        )}

      </div>
    </div>
  );
};

export default Certifications;