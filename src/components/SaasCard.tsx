
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
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="cyber-card p-6 rounded-lg h-full flex flex-col">
      {/* Tag badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30">
          {tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 neon-text">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-4 flex-1">
        {description}
      </p>

      {/* Promo code section */}
      <div className="bg-cyber-gray/50 rounded-lg p-4 mb-4 border border-neon-cyan/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400 mb-1">Code promo</p>
            <p className="font-mono text-neon-cyan font-bold">{promo}</p>
          </div>
          <button
            onClick={handleCopyPromo}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              copied
                ? 'bg-green-500 text-white'
                : 'bg-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg border border-neon-cyan/30'
            }`}
          >
            {copied ? '✓ Copié!' : 'COPIER'}
          </button>
        </div>
        {/* Animated promo badge */}
        <div className="mt-2">
          <span className="inline-block animate-neon-pulse text-xs px-2 py-1 rounded-full bg-neon-pink/20 text-neon-pink border border-neon-pink/30">
            Exclusif Digital DNA
          </span>
        </div>
      </div>

      {/* Visit button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"
      >
        Visiter →
      </a>
    </div>
  );
};

export default SaasCard;
