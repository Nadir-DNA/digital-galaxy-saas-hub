
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Track newsletter signup
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'newsletter_signup', {
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
            Stay in the Productivity Galaxy
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Subscribe to our newsletter to receive the latest productivity tools and exclusive insights
          </p>
          
          {/* SEO benefits list */}
          <div className="mb-8 text-gray-400">
            <p className="text-sm mb-2">What you'll receive:</p>
            <ul className="text-sm space-y-1 max-w-md mx-auto">
              <li>🎯 New tool discoveries every week</li>
              <li>💡 Productivity tips and best practices</li>
              <li>📊 Tool comparisons and reviews</li>
              <li>🚀 Growth hacks for professionals</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-medium-blue/50 border border-neon-purple/30 text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20"
              required
              aria-label="Email address for newsletter subscription"
            />
            <button
              type="submit"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                subscribed
                  ? 'bg-green-500 text-white'
                  : 'neon-border neon-text hover:bg-neon-purple hover:text-dark-blue animate-neon-pulse'
              }`}
              aria-label="Subscribe to Digital DNA newsletter"
            >
              {subscribed ? '✓ Subscribed!' : 'Get Tools Updates 🚀'}
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-4">
            No spam, only premium productivity content and tool discoveries 🚀
          </p>
          
          {/* Trust indicators */}
          <div className="mt-6 text-xs text-gray-500 flex justify-center gap-4">
            <span>+1000 professionals subscribed</span>
            <span>•</span>
            <span>GDPR compliant</span>
            <span>•</span>
            <span>1-click unsubscribe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
