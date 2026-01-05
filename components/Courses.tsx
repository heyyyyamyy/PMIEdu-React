import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: "Project Management Professional (PMP)®",
    rating: "4.9",
    reviews: "12.5k",
    duration: "35 Hours",
    level: "Advanced",
    tags: ["Best Seller", "Live"],
    color: "from-blue-600 to-cyan-400"
  },
  {
    title: "Certified Associate in Project Management (CAPM)®",
    rating: "4.8",
    reviews: "8.2k",
    duration: "23 Hours",
    level: "Beginner",
    tags: ["Popular"],
    color: "from-purple-600 to-pink-400"
  },
  {
    title: "PMI Agile Certified Practitioner (PMI-ACP)®",
    rating: "4.9",
    reviews: "5.4k",
    duration: "21 Hours",
    level: "Intermediate",
    tags: ["Agile"],
    color: "from-orange-500 to-yellow-400"
  },
  {
    title: "Disciplined Agile® Scrum Master (DASM)",
    rating: "4.7",
    reviews: "3.1k",
    duration: "14 Hours",
    level: "Beginner",
    tags: ["Scrum"],
    color: "from-green-600 to-emerald-400"
  }
];

const Courses: React.FC = () => {
  return (
    <section id="certifications" className="w-full py-24 bg-[#080808] relative">
       {/* Background decorative blob */}
       <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00ff84]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff84] to-[#caff00]">Certifications</span>
            </motion.h2>
            <p className="text-gray-400 text-lg">Elevate your career with globally recognized credentials.</p>
          </div>
          <Link to="/certifications">
            <motion.button 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="px-6 py-3 border border-[#00ff84] text-[#00ff84] rounded-full hover:bg-[#00ff84] hover:text-black transition-all duration-300 font-medium"
            >
              View All Courses
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#121212] rounded-2xl overflow-hidden border border-white/5 hover:border-[#00ff84] transition-all duration-300 flex flex-col h-full"
            >
              {/* Course Card Top Gradient */}
              <div className={`h-2 bg-gradient-to-r ${course.color}`} />
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4">
                  {course.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-[#00ff84] transition-colors">
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
                    <span>{course.level}</span>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="block">
                <div className="p-4 bg-white/5 flex items-center justify-between group-hover:bg-[#00ff84] transition-colors duration-300">
                  <span className="font-bold text-white group-hover:text-black">Enroll Now</span>
                  <ArrowUpRight size={20} className="text-white group-hover:text-black transform group-hover:rotate-45 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;