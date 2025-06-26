
import React from 'react';

const features = [
  {
    icon: '🎯',
    title: 'Sélection Experte',
    description: 'Chaque SaaS est testé et approuvé par notre équipe d\'experts startup. Seuls les meilleurs outils font partie de notre galaxie.',
    keywords: 'curation SaaS, sélection outils, expertise startup'
  },
  {
    icon: '💰',
    title: 'Économies Garanties',
    description: 'Codes promo exclusifs négociés directement avec les éditeurs. Économisez jusqu\'à 50% sur vos abonnements SaaS préférés.',
    keywords: 'codes promo exclusifs, réductions SaaS, économies startup'
  },
  {
    icon: '🚀',
    title: 'Croissance Accélérée',
    description: 'Outils sélectionnés pour booster votre croissance : CRM, marketing automation, analytics, productivité et bien plus.',
    keywords: 'croissance startup, outils marketing, CRM, productivité'
  }
];

const WhySection = () => {
  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Pourquoi Digital DNA ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La plateforme de référence pour découvrir les meilleurs codes promo SaaS en France. 
            Nous négocions pour vous des réductions exclusives sur les outils indispensables aux startups et entreprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <article
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
              <p className="text-gray-300 mb-4">
                {feature.description}
              </p>
              <div className="text-xs text-gray-500 opacity-0">
                {feature.keywords}
              </div>
            </article>
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="bg-medium-blue/30 rounded-2xl p-8 border border-neon-purple/20">
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
            Votre Partenaire SaaS en France
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-neon-purple">🎯 Notre Mission</h4>
              <p className="leading-relaxed">
                Chez Digital DNA, nous comprenons les défis des entrepreneurs français. C'est pourquoi nous négocions 
                directement avec les éditeurs SaaS pour vous offrir des codes promo exclusifs sur les outils qui 
                accélèrent vraiment votre croissance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-neon-purple">💡 Notre Expertise</h4>
              <p className="leading-relaxed">
                Notre équipe teste personnellement chaque SaaS avant de l'intégrer à notre galaxie. 
                Nous évaluons la qualité, l'innovation et la valeur ajoutée pour les startups et PME françaises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
