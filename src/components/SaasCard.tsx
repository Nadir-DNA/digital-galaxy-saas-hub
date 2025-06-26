
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
          'tool_name': title
        }
      });
    }
    
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVisitTool = () => {
    // Track external link clicks
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'tool_visit', {
        'event_category': 'outbound_link',
        'event_label': title,
        'custom_parameters': {
          'destination_url': url,
          'tool_category': tag
        }
      });
    }
  };

  const hasPromo = promo && promo.trim() !== '';

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

      {/* Promo code section - only show if promo exists */}
      {hasPromo && (
        <div className="bg-medium-blue/50 rounded-lg p-4 mb-4 border border-neon-purple/20" itemScope itemType="https://schema.org/Offer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">Exclusive Promo Code</p>
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
              aria-label={`Copy promo code ${promo} for ${title}`}
            >
              {copied ? '✓ Copied!' : 'COPY'}
            </button>
          </div>
          
          {/* Animated promo badge */}
          <div className="mt-3 flex items-center justify-between">
            <span className="inline-block animate-neon-pulse text-xs px-2 py-1 rounded-full bg-bright-purple/20 text-bright-purple border border-bright-purple/30">
              Exclusive Digital DNA
            </span>
            <span className="text-xs text-gray-500">
              Verified daily
            </span>
          </div>
        </div>
      )}

      {/* Visit button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleVisitTool}
        className="block w-full text-center py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-neon-purple hover:text-neon-purple transition-all duration-300 font-medium"
        itemProp="url"
        aria-label={`Visit ${title}${hasPromo ? ` with promo code ${promo}` : ''}`}
      >
        Visit {title} →
      </a>
    </article>
  );
};

export default SaasCard;
