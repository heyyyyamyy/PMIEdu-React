import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#020202] border-t border-white/10 pt-20 pb-8">
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-1">
              <span className="font-orbitron font-black text-3xl tracking-wider text-white">PMI</span>
              <span className="font-orbitron font-black text-3xl tracking-wider text-[#00ff84]">Edu</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering professionals worldwide with top-tier project management training and certifications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                  <Link to="/about" className="text-gray-400 hover:text-[#00ff84] transition-colors">About Us</Link>
              </li>
              <li>
                  <Link to="/process" className="text-gray-400 hover:text-[#00ff84] transition-colors">Success Stories</Link>
              </li>
              <li>
                  <Link to="/partnerships" className="text-gray-400 hover:text-[#00ff84] transition-colors">Corporate Training</Link>
              </li>
              <li>
                  <Link to="/become-instructor" className="text-gray-400 hover:text-[#00ff84] transition-colors">Become an Instructor</Link>
              </li>
              <li>
                  <Link to="/blog" className="text-gray-400 hover:text-[#00ff84] transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-orbitron font-bold text-white text-lg mb-6">Popular Courses</h4>
            <ul className="space-y-4">
              {['PMP® Certification', 'CAPM® Training', 'PMI-ACP® Agile', 'DASM™ Scrum Master', 'Risk Management'].map((item) => (
                <li key={item}>
                  <Link to="/certifications" className="text-gray-400 hover:text-[#00ff84] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron font-bold text-white text-lg mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-[#00ff84] mt-1 shrink-0" size={20} />
                <span>5th Floor, NBP Green Heights, C-69, Bandra Kurla Complex Rd, opposite to MCA Club, G Block BKC, Bandra East, Mumbai, Maharashtra 400051</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-[#00ff84] shrink-0" size={20} />
                <span>+91-7965267794</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} PMIEdu Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            {/* Hidden Admin Link - Color matches background exactly */}
            <Link to="/contact-responses" className="text-[#020202] hover:text-[#020202] cursor-default selection:bg-transparent">Responses</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;