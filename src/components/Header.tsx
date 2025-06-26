
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'blur-bg border-b border-neon-purple/20' : ''
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">
          <h1 className="text-xl md:text-2xl">Digital DNA</h1>
          <p className="text-xs text-gray-400 hidden md:block">Codes Promo SaaS</p>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('saas')}
            className="hover:text-neon-purple transition-colors"
            aria-label="Voir les codes promo SaaS"
          >
            Codes Promo
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="hover:text-neon-purple transition-colors"
            aria-label="En savoir plus sur Digital DNA"
          >
            À propos
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hover:text-neon-purple transition-colors"
            aria-label="S'inscrire à la newsletter"
          >
            Newsletter
          </button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-neon-purple"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu mobile"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-dark-blue/95 backdrop-blur-lg border-b border-neon-purple/20 md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <button 
                onClick={() => scrollToSection('saas')}
                className="text-left hover:text-neon-purple transition-colors"
              >
                Codes Promo SaaS
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-neon-purple transition-colors"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-neon-purple transition-colors"
              >
                Newsletter
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
