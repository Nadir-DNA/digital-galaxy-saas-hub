
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSaas = () => {
    const saasSection = document.getElementById('saas');
    if (saasSection) {
      saasSection.scrollIntoView({ behavior: 'smooth' });
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
          Codes Promo SaaS Exclusifs | Économisez sur vos Outils Startup
        </h2>
        
        {/* Value proposition */}
        <p 
          className={`text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Découvrez notre galaxie de SaaS premium avec des réductions exclusives jusqu'à 50%. 
          CRM, marketing, productivité : tous vos outils startup à prix réduit.
        </p>
        
        {/* CTA Button */}
        <button 
          onClick={scrollToSaas}
          className={`cyber-card px-8 py-4 text-lg font-semibold neon-text hover:bg-neon-purple hover:text-dark-blue transition-all duration-300 rounded-lg neon-border animate-neon-pulse ${
            isVisible ? 'opacity-100 translate-y-0 delay-1000' : 'opacity-0 translate-y-4'
          }`}
          aria-label="Découvrir les codes promo SaaS exclusifs"
        >
          Découvrir les Codes Promo 🚀
        </button>
        
        {/* Trust indicators */}
        <div 
          className={`mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400 transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="flex items-center gap-2">
            ✅ Codes vérifiés quotidiennement
          </span>
          <span className="flex items-center gap-2">
            💰 Jusqu'à 50% d'économies
          </span>
          <span className="flex items-center gap-2">
            🇫🇷 Spécialisé France
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
