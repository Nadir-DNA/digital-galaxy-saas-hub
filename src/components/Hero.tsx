
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Main title with glitch effect */}
        <h1 
          className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-glitch' : 'opacity-0'
          }`}
        >
          <span className="neon-text inline-block">Digital</span>{' '}
          <span className="gradient-text inline-block">DNA</span>
        </h1>
        
        {/* SEO optimized subtitle */}
        <h2 
          className={`text-xl md:text-2xl mb-4 text-gray-300 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Your Productivity Tools Galaxy | Discover the Best Tools for Success
        </h2>
        
        {/* Value proposition */}
        <p 
          className={`text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Explore our curated collection of premium productivity tools. 
          From CRM to marketing automation, find the perfect tools to accelerate your success.
        </p>
        
        {/* CTA Button */}
        <button 
          onClick={scrollToTools}
          className={`cyber-card px-8 py-4 text-lg font-semibold neon-text hover:bg-neon-purple hover:text-dark-blue transition-all duration-300 rounded-lg neon-border animate-neon-pulse ${
            isVisible ? 'opacity-100 translate-y-0 delay-1000' : 'opacity-0 translate-y-4'
          }`}
          aria-label="Discover the best productivity tools"
        >
          Discover Tools 🚀
        </button>
        
        {/* Trust indicators */}
        <div 
          className={`mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400 transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="flex items-center gap-2">
            ✅ Curated by experts
          </span>
          <span className="flex items-center gap-2">
            💰 Tools for every budget
          </span>
          <span className="flex items-center gap-2">
            🚀 Boost your productivity
          </span>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-bright-purple/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
