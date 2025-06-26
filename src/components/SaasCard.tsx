
import React, { useState } from 'react';

interface SaasCardProps {
  title: string;
  url: string;
  tag: string;
  description: string;
  promo: string;
}

const SaasCard: React.FC<SaasCardProps> = ({ title, url, tag, description, promo }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPromo = () => {
    navigator.clipboard.writeText(promo);
    setCopied(true);
    
    // Track promo code copy
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'promo_code_copy', {
        'event_category': 'engagement',
        'event_label': title,
        'custom_parameters': {
          'promo_code': promo,
          'saas_name': title
        }
      });
    }
    
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVisitSaas = () => {
    // Track external link clicks
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'saas_visit', {
        'event_category': 'outbound_link',
        'event_label': title,
        'custom_parameters': {
          'destination_url': url,
          'saas_category': tag
        }
      });
    }
  };

  return (
    <article className="cyber-card p-6 rounded-lg h-full flex flex-col" itemScope itemType="https://schema.org/Product">
      {/* Tag badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30">
          {tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 neon-text" itemProp="name">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-4 flex-1 leading-relaxed" itemProp="description">
        {description}
      </p>

      {/* Promo code section */}
      <div className="bg-medium-blue/50 rounded-lg p-4 mb-4 border border-neon-purple/20" itemScope itemType="https://schema.org/Offer">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400 mb-1">Code promo exclusif</p>
            <p className="font-mono text-neon-purple font-bold text-lg" itemProp="promoCode">
              {promo}
            </p>
          </div>
          <button
            onClick={handleCopyPromo}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
              copied
                ? 'bg-green-500 text-white'
                : 'bg-neon-purple/20 text-neon-purple hover:bg-neon-purple hover:text-dark-blue border border-neon-purple/30'
            }`}
            aria-label={`Copier le code promo ${promo} pour ${title}`}
          >
            {copied ? '✓ Copié!' : 'COPIER'}
          </button>
        </div>
        
        {/* Animated promo badge */}
        <div className="mt-3 flex items-center justify-between">
          <span className="inline-block animate-neon-pulse text-xs px-2 py-1 rounded-full bg-bright-purple/20 text-bright-purple border border-bright-purple/30">
            Exclusif Digital DNA
          </span>
          <span className="text-xs text-gray-500">
            Vérifié quotidiennement
          </span>
        </div>
      </div>

      {/* Visit button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleVisitSaas}
        className="block w-full text-center py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-neon-purple hover:text-neon-purple transition-all duration-300 font-medium"
        itemProp="url"
        aria-label={`Visiter ${title} avec le code promo ${promo}`}
      >
        Visiter {title} →
      </a>
    </article>
  );
};

export default SaasCard;
