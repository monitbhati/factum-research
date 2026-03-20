import React from 'react';

export const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/factum-logo.png" 
        alt="FACTUM RESEARCH" 
        className="h-12 w-auto"
        style={{ maxHeight: '48px' }}
      />
    </div>
  );
};