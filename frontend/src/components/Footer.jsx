import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { mockData } from '../mock';
import { Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <div className="bg-white inline-block px-3 py-2 rounded-lg">
              <Logo />
            </div>
          </div>
          <p className="text-slate-400 mb-4 text-lg leading-relaxed">{mockData.company.tagline}</p>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Transforming market complexity into strategic clarity through precision research methodologies.
          </p>
          {/* LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/company/factum-research" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors font-medium"
          >
            <Linkedin size={20} />
            Follow us on LinkedIn
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-12 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {mockData.company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};