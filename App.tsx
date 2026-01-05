import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Certifications from './pages/Certifications';
import Process from './pages/Process';
import Partnerships from './pages/Partnerships';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Blog from './pages/Blog';
import BecomeInstructor from './pages/BecomeInstructor';
import ContactResponses from './pages/ContactResponses';

const App: React.FC = () => {
  return (
    <Router>
      <div className="w-full min-h-screen bg-[#050505] text-white font-sans flex flex-col">
        <Navbar />
        <main className="w-full flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/process" element={<Process />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/become-instructor" element={<BecomeInstructor />} />
            
            {/* Hidden Admin Route */}
            <Route path="/contact-responses" element={<ContactResponses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;