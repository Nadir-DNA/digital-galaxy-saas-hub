
import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Animated constellation background */}
      <div className="absolute inset-0 animate-float-stars">
        {/* Stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-purple rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              boxShadow: '0 0 6px rgba(139, 92, 246, 0.8)'
            }}
          />
        ))}
        
        {/* Constellation lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="constellation" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          <path
            d="M100,200 L300,150 L500,300 L700,200 L900,350"
            stroke="url(#constellation)"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M200,100 L400,250 L600,100 L800,300"
            stroke="url(#constellation)"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
          />
        </svg>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-transparent to-medium-blue opacity-90" />
    </div>
  );
};

export default Background;
