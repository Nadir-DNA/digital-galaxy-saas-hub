
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Track newsletter signup
      if (typeof gtag !== 'undefined') {
        gtag('event', 'newsletter_signup', {
          'event_category': 'engagement',
          'event_label': 'newsletter_subscription'
        });
      }
      
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="cyber-card p-12 rounded-2xl text-center bg-gradient-to-r from-neon-purple/10 via-bright-purple/10 to-light-purple/10 border-2 border-neon-purple/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Restez dans la Galaxie SaaS
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Inscrivez-vous à notre newsletter pour recevoir les nouveaux codes promo SaaS exclusifs
          </p>
          
          {/* SEO benefits list */}
          <div className="mb-8 text-gray-400">
            <p className="text-sm mb-2">Ce que vous recevrez :</p>
            <ul className="text-sm space-y-1 max-w-md mx-auto">
              <li>🎯 Nouveaux codes promo chaque semaine</li>
              <li>💡 Découvertes d'outils SaaS innovants</li>
              <li>📊 Comparatifs et analyses d'outils</li>
              <li>🚀 Tips croissance pour startups</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-medium-blue/50 border border-neon-purple/30 text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20"
              required
              aria-label="Adresse email pour la newsletter"
            />
            <button
              type="submit"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                subscribed
                  ? 'bg-green-500 text-white'
                  : 'neon-border neon-text hover:bg-neon-purple hover:text-dark-blue animate-neon-pulse'
              }`}
              aria-label="S'inscrire à la newsletter Digital DNA"
            >
              {subscribed ? '✓ Inscrit!' : 'Recevoir les Codes 🚀'}
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-4">
            Pas de spam, que du contenu premium sur les SaaS et codes promo exclusifs 🚀
          </p>
          
          {/* Trust indicators */}
          <div className="mt-6 text-xs text-gray-500 flex justify-center gap-4">
            <span>+1000 entrepreneurs inscrits</span>
            <span>•</span>
            <span>Conformité RGPD</span>
            <span>•</span>
            <span>Désabonnement 1-clic</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
