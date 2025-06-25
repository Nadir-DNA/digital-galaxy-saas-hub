
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="cyber-card p-12 rounded-2xl text-center bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10 border-2 border-neon-cyan/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Restez dans la galaxie
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Inscrivez-vous pour recevoir de nouveaux codes exclusifs
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-cyber-gray/50 border border-neon-cyan/30 text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20"
              required
            />
            <button
              type="submit"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                subscribed
                  ? 'bg-green-500 text-white'
                  : 'neon-border neon-text hover:bg-neon-cyan hover:text-dark-bg animate-neon-pulse'
              }`}
            >
              {subscribed ? '✓ Inscrit!' : 'S\'inscrire'}
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-4">
            Pas de spam, que du contenu premium 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
