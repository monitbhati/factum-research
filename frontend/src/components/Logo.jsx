import React from 'react';

export const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Intertwining swirl logo inspired by Quirky - F and R forming elegant curves */}
        
        {/* Yellow swirl (representing F) - Upper flowing curve */}
        <path 
          d="M 6 25 Q 6 12 16 8 Q 26 4 32 12 Q 36 18 34 26" 
          fill="none" 
          stroke="#FDB913" 
          strokeWidth="4.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path 
          d="M 34 26 Q 32 32 26 34 Q 20 36 16 32" 
          fill="none" 
          stroke="#FDB913" 
          strokeWidth="4.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Magenta/Purple swirl (representing R) - Lower intertwining curve */}
        <path 
          d="M 16 32 Q 10 28 10 20 Q 10 12 16 10" 
          fill="none" 
          stroke="#C2185B" 
          strokeWidth="4.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path 
          d="M 16 10 Q 22 8 28 12 Q 32 16 32 22" 
          fill="none" 
          stroke="#C2185B" 
          strokeWidth="4.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path 
          d="M 32 22 Q 32 28 28 32 Q 24 36 18 38" 
          fill="none" 
          stroke="#C2185B" 
          strokeWidth="4.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Inner connecting curves for depth */}
        <path 
          d="M 20 16 Q 24 16 26 20 Q 28 24 26 28" 
          fill="none" 
          stroke="#FDB913" 
          strokeWidth="3.5" 
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* Company name */}
        <text x="50" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="700" fill="#1e3a5f" letterSpacing="0.5">FACTUM</text>
        <text x="50" y="37" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10" fontWeight="600" fill="#C2185B" letterSpacing="1.8">RESEARCH</text>
      </svg>
    </div>
  );
};