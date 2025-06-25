
import React from 'react';

const features = [
  {
    icon: '🎯',
    title: 'Sélection experte',
    description: 'Chaque SaaS est testé et approuvé par notre équipe'
  },
  {
    icon: '💰',
    title: 'Économies garanties',
    description: 'Codes promo exclusifs pour maximiser vos économies'
  },
  {
    icon: '🚀',
    title: 'Boost votre croissance',
    description: 'Outils sélectionnés pour accélérer votre développement'
  }
];

const WhySection = () => {
  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Why Digital DNA?
          </h2>
          <p className="text-xl text-gray-300">
            La plateforme de référence pour découvrir les meilleurs SaaS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="cyber-card p-8 rounded-lg text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 neon-text">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
