import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Certification Process', href: '/process' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 cursor-pointer group">
          <span className="font-orbitron font-black text-2xl tracking-wider text-white group-hover:text-white/90">PMI</span>
          <span className="font-orbitron font-black text-2xl tracking-wider text-[#00ff84] group-hover:text-[#00ff84]/90">Edu</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.href ? 'text-[#00ff84]' : 'text-gray-300 hover:text-[#00ff84]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden lg:flex">
          <a 
            href="https://exam.pmiedu.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00ff84] hover:bg-[#00cc6a] text-black font-bold py-2.5 px-8 rounded-full transition-transform transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,132,0.4)]"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-[#00ff84] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 backdrop-blur-lg flex flex-col items-center py-6 gap-6 h-screen">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-lg font-medium transition-colors ${
                location.pathname === link.href ? 'text-[#00ff84]' : 'text-gray-300 hover:text-[#00ff84]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="https://exam.pmiedu.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00ff84] text-black font-bold py-3 px-10 rounded-full w-3/4 text-center"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;