import React from 'react';

const LogoShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          FACTUM RESEARCH - Logo Options
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Choose your favorite logo design. Each option represents a different color palette.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Option 1: Wild & Bold Colors */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-500 transition">
            <h3 className="text-xl font-bold mb-4 text-gray-700">Option 1: Wild & Bold</h3>
            <p className="text-sm text-gray-500 mb-6">Energetic, modern, attention-grabbing</p>
            <div className="flex justify-center items-center bg-gradient-to-br from-purple-50 to-pink-50 p-12 rounded-lg">
              <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* F in bold gradient */}
                <defs>
                  <linearGradient id="wild1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#8B5CF6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#EC4899', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <path d="M 20 15 L 20 65 L 28 65 L 28 43 L 48 43 L 48 35 L 28 35 L 28 23 L 52 23 L 52 15 Z" fill="url(#wild1)"/>
                
                {/* R with accent */}
                <path d="M 68 15 L 68 65 L 76 65 L 76 43 L 88 43 L 100 65 L 110 65 L 97 42 Q 108 40 108 28 Q 108 15 94 15 Z M 76 23 L 92 23 Q 100 23 100 28 Q 100 35 92 35 L 76 35 Z" fill="url(#wild1)"/>
                
                {/* Accent element */}
                <circle cx="115" cy="20" r="4" fill="#F59E0B"/>
                <circle cx="125" cy="25" r="3" fill="#10B981"/>
                <circle cx="120" cy="32" r="3.5" fill="#3B82F6"/>
              </svg>
            </div>
            <div className="mt-4 flex gap-2 justify-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <div className="w-10 h-10 rounded-full bg-amber-500"></div>
              <div className="w-10 h-10 rounded-full bg-emerald-500"></div>
            </div>
          </div>

          {/* Option 2: Pleasant & Soft */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-400 transition">
            <h3 className="text-xl font-bold mb-4 text-gray-700">Option 2: Pleasant & Soft</h3>
            <p className="text-sm text-gray-500 mb-6">Calm, trustworthy, approachable</p>
            <div className="flex justify-center items-center bg-gradient-to-br from-blue-50 to-cyan-50 p-12 rounded-lg">
              <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="pleasant" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#60A5FA', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#34D399', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                {/* Rounded F */}
                <path d="M 20 15 Q 20 15 20 20 L 20 60 Q 20 65 25 65 Q 30 65 30 60 L 30 43 L 48 43 Q 50 43 50 41 Q 50 39 48 39 L 30 39 L 30 23 L 50 23 Q 52 23 52 21 Q 52 19 50 19 L 25 19 Q 20 19 20 15 Z" fill="url(#pleasant)"/>
                
                {/* Rounded R */}
                <path d="M 68 20 Q 68 15 73 15 L 90 15 Q 105 15 105 28 Q 105 38 95 40 L 106 60 Q 108 65 103 65 Q 100 65 98 62 L 85 40 L 78 40 L 78 60 Q 78 65 73 65 Q 68 65 68 60 Z M 78 23 L 78 32 L 90 32 Q 97 32 97 28 Q 97 23 90 23 Z" fill="url(#pleasant)"/>
                
                {/* Soft dots */}
                <circle cx="120" cy="25" r="5" fill="#93C5FD" opacity="0.6"/>
                <circle cx="132" cy="30" r="4" fill="#6EE7B7" opacity="0.6"/>
              </svg>
            </div>
            <div className="mt-4 flex gap-2 justify-center">
              <div className="w-10 h-10 rounded-full bg-blue-400"></div>
              <div className="w-10 h-10 rounded-full bg-cyan-400"></div>
              <div className="w-10 h-10 rounded-full bg-emerald-400"></div>
            </div>
          </div>

          {/* Option 3: Professional & Corporate */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-slate-700 transition">
            <h3 className="text-xl font-bold mb-4 text-gray-700">Option 3: Professional & Corporate</h3>
            <p className="text-sm text-gray-500 mb-6">Authoritative, serious, established</p>
            <div className="flex justify-center items-center bg-gradient-to-br from-slate-50 to-gray-100 p-12 rounded-lg">
              <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Bold F */}
                <path d="M 20 15 L 20 65 L 30 65 L 30 43 L 50 43 L 50 35 L 30 35 L 30 23 L 54 23 L 54 15 Z" fill="#1E293B"/>
                
                {/* Bold R */}
                <path d="M 68 15 L 68 65 L 78 65 L 78 43 L 88 43 L 102 65 L 114 65 L 99 41 Q 110 39 110 27 Q 110 15 94 15 Z M 78 23 L 92 23 Q 102 23 102 27 Q 102 35 92 35 L 78 35 Z" fill="#1E293B"/>
                
                {/* Professional accent bar */}
                <rect x="120" y="15" width="4" height="50" fill="#3B82F6" rx="2"/>
                <rect x="127" y="25" width="4" height="40" fill="#64748B" rx="2"/>
              </svg>
            </div>
            <div className="mt-4 flex gap-2 justify-center">
              <div className="w-10 h-10 rounded-full bg-slate-800"></div>
              <div className="w-10 h-10 rounded-full bg-blue-600"></div>
              <div className="w-10 h-10 rounded-full bg-gray-500"></div>
            </div>
          </div>

          {/* Option 4: Modern & Vibrant */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-orange-500 transition">
            <h3 className="text-xl font-bold mb-4 text-gray-700">Option 4: Modern & Vibrant</h3>
            <p className="text-sm text-gray-500 mb-6">Fresh, innovative, dynamic</p>
            <div className="flex justify-center items-center bg-gradient-to-br from-orange-50 to-red-50 p-12 rounded-lg">
              <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="modern" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#F97316', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#EF4444', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                {/* Stylized F with cutout */}
                <path d="M 20 15 L 20 65 L 28 65 L 28 44 L 46 44 L 46 36 L 28 36 L 28 23 L 50 23 L 50 15 Z" fill="url(#modern)"/>
                <rect x="32" y="48" width="8" height="8" fill="#FCD34D" rx="2"/>
                
                {/* Modern R */}
                <path d="M 66 15 L 66 65 L 74 65 L 74 44 L 84 44 L 98 65 L 108 65 L 93 43 Q 104 41 104 28 Q 104 15 90 15 Z M 74 23 L 88 23 Q 96 23 96 28 Q 96 36 88 36 L 74 36 Z" fill="url(#modern)"/>
                
                {/* Modern geometric accent */}
                <polygon points="115,20 125,20 120,30" fill="#14B8A6"/>
                <rect x="115" y="35" width="10" height="10" fill="#8B5CF6" rx="2"/>
              </svg>
            </div>
            <div className="mt-4 flex gap-2 justify-center">
              <div className="w-10 h-10 rounded-full bg-orange-600"></div>
              <div className="w-10 h-10 rounded-full bg-red-500"></div>
              <div className="w-10 h-10 rounded-full bg-yellow-400"></div>
            </div>
          </div>

          {/* Option 5: Classic & Elegant */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-indigo-600 transition col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-gray-700">Option 5: Classic & Elegant</h3>
            <p className="text-sm text-gray-500 mb-6">Timeless, sophisticated, refined</p>
            <div className="flex justify-center items-center bg-gradient-to-br from-indigo-50 to-violet-50 p-12 rounded-lg">
              <svg width="240" height="80" viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="elegant" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#4F46E5', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#7C3AED', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                {/* Serif-style F */}
                <path d="M 25 15 L 25 17 L 30 17 L 30 63 L 25 63 L 25 65 L 45 65 L 45 63 L 40 63 L 40 42 L 55 42 L 55 40 L 40 40 L 40 23 L 58 23 L 58 30 L 60 30 L 60 15 Z" fill="url(#elegant)"/>
                
                {/* Serif-style R */}
                <path d="M 75 15 L 75 17 L 80 17 L 80 42 L 95 42 L 108 63 L 103 63 L 103 65 L 120 65 L 120 63 L 113 63 L 100 43 Q 115 42 115 28 Q 115 15 98 15 Z M 90 17 L 98 17 Q 105 17 105 28 Q 105 40 95 40 L 90 40 L 90 63 L 95 63 L 95 65 L 75 65 L 75 63 L 80 63 L 80 42 L 90 42 Z" fill="url(#elegant)"/>
                
                {/* Elegant flourish */}
                <path d="M 135 35 Q 140 30 145 35 Q 150 40 145 45 Q 140 50 135 45 Q 130 40 135 35" fill="#A78BFA" opacity="0.4"/>
                <circle cx="155" cy="40" r="2" fill="#C4B5FD"/>
              </svg>
            </div>
            <div className="mt-4 flex gap-2 justify-center">
              <div className="w-10 h-10 rounded-full bg-indigo-600"></div>
              <div className="w-10 h-10 rounded-full bg-violet-600"></div>
              <div className="w-10 h-10 rounded-full bg-purple-400"></div>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Once you choose a logo, we'll update the color scheme across the entire website to match!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
