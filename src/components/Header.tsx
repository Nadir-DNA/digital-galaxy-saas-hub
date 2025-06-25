
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'blur-bg border-b border-neon-purple/20' : ''
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">
          Digital DNA
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#saas" className="hover:text-neon-purple transition-colors">
            SaaS
          </a>
          <a href="#about" className="hover:text-neon-purple transition-colors">
            À propos
          </a>
          <a href="#contact" className="hover:text-neon-purple transition-colors">
            Contact
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-neon-purple">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
