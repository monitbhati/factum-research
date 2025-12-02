import React from 'react';

export const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="180" height="48" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#F97316', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#EF4444', stopOpacity: 1}} />
          </linearGradient>
        </defs>
        
        {/* Stylized F with cutout */}
        <path d="M 4 8 L 4 40 L 12 40 L 12 27 L 26 27 L 26 20 L 12 20 L 12 15 L 30 15 L 30 8 Z" fill="url(#logoGradient)"/>
        <rect x="16" y="31" width="6" height="6" fill="#FCD34D" rx="1.5"/>
        
        {/* Modern R */}
        <path d="M 36 8 L 36 40 L 44 40 L 44 27 L 52 27 L 62 40 L 72 40 L 61 26 Q 70 24.5 70 16 Q 70 8 58 8 Z M 44 15 L 56 15 Q 62 15 62 16 Q 62 20 56 20 L 44 20 Z" fill="url(#logoGradient)"/>
        
        {/* Modern geometric accents */}
        <polygon points="74,11 82,11 78,18" fill="#14B8A6"/>
        <rect x="74" y="22" width="8" height="8" fill="#8B5CF6" rx="1.5"/>
        
        {/* Company name */}
        <text x="88" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="700" fill="#1e293b" letterSpacing="0.5">FACTUM</text>
        <text x="88" y="34" fontFamily="system-ui, -apple-system, sans-serif" fontSize="9" fontWeight="500" fill="#F97316" letterSpacing="1.5">RESEARCH</text>
      </svg>
    </div>
  );
};