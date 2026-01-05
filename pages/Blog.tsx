import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Top 5 PMP Exam Tips for 2024",
    excerpt: "Preparing for the PMP exam? Here are the essential strategies you need to know to pass on your first attempt, updated for the 2024 exam content outline.",
    date: "Oct 24, 2023",
    author: "Ramprasad",
    category: "Exam Prep",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Agile vs. Waterfall: Choosing the Right Methodology",
    excerpt: "Confused between Agile and Waterfall? We break down the pros and cons of each project management methodology to help you decide which is best for your team.",
    date: "Oct 18, 2023",
    author: "Prat Willson",
    category: "Methodologies",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "The Future of Project Management with AI",
    excerpt: "Artificial Intelligence is reshaping how projects are delivered. Discover how AI tools are automating routine tasks and enhancing decision-making for project managers.",
    date: "Oct 10, 2023",
    author: "Rajaram",
    category: "Trends",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    title: "Understanding the PMBOK Guide 7th Edition",
    excerpt: "A comprehensive overview of the major changes in the PMBOK Guide 7th Edition and what it means for aspiring PMP candidates.",
    date: "Sep 28, 2023",
    author: "Akhilesh",
    category: "Resources",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 5,
    title: "Soft Skills Every Project Manager Needs",
    excerpt: "Technical skills get you the job, but soft skills get you promoted. Learn about the crucial interpersonal skills required for successful project leadership.",
    date: "Sep 15, 2023",
    author: "Ramprasad",
    category: "Career Growth",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 6,
    title: "How to Earn PDUs for Recertification",
    excerpt: "Don't let your certification lapse. Here is a complete guide on how to earn Professional Development Units (PDUs) easily and effectively.",
    date: "Sep 05, 2023",
    author: "Prat Willson",
    category: "Certification",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#050505] pt-24 pb-20">
      <div className="w-full px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Insights & <span className="text-[#00ff84]">Updates</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stay ahead in your career with the latest trends, tips, and expert advice in project management.
          </p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-20 relative group overflow-hidden rounded-3xl border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
                 alt="Featured" 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
               />
            </div>
            <div className="bg-[#121212] p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                 <span className="bg-[#00ff84] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Featured</span>
                 <span className="text-gray-500 text-sm flex items-center gap-1"><Calendar size={14}/> Nov 01, 2023</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#00ff84] transition-colors">
                Navigating the Project Economy: 2024 Outlook
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                As organizations increasingly shift to project-based work, the demand for skilled project professionals is skyrocketing. We explore the key drivers of this change and what skills will be most valuable in the coming year.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                     <img src="https://ui-avatars.com/api/?name=Admin+User&background=00ff84&color=000" alt="Author" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">PMIEdu Team</p>
                    <p className="text-gray-500 text-xs">10 min read</p>
                  </div>
                </div>
                <button className="text-[#00ff84] hover:text-white transition-colors flex items-center gap-2 font-bold">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#121212] rounded-2xl overflow-hidden border border-white/5 hover:border-[#00ff84]/50 transition-all group flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-[#00ff84] text-xs font-bold uppercase tracking-wider">{post.category}</span>
                 </div>
                 <img 
                   src={post.image} 
                   alt={post.title} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                 />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                   <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                   <span className="flex items-center gap-1"><User size={12}/> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#00ff84] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                   <span className="text-xs text-gray-500">{post.readTime}</span>
                   <span className="text-[#00ff84] text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">
                     Read Article <ArrowRight size={14} />
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-16">
           <button className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-[#00ff84] hover:text-black hover:border-[#00ff84] transition-all font-medium">
             Load More Articles
           </button>
        </div>

      </div>
    </div>
  );
};

export default Blog;
