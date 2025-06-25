
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        
        {/* Subtitle with fade-in animation */}
        <p 
          className={`text-xl md:text-2xl mb-8 text-gray-300 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Explore the SaaS galaxy, boost your growth.
        </p>
        
        {/* CTA Button */}
        <button 
          className={`cyber-card px-8 py-4 text-lg font-semibold neon-text hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 rounded-lg neon-border animate-neon-pulse ${
            isVisible ? 'opacity-100 translate-y-0 delay-1000' : 'opacity-0 translate-y-4'
          }`}
        >
          Découvrir les SaaS
        </button>
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
