
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo-white.png';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="block">
              <img 
                src={logo}
                alt="TEDx Deree ACG" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/40 text-sm max-w-xs text-center md:text-left uppercase tracking-widest leading-relaxed mt-2">
              Exploring horizons through ideas worth spreading in the heart of Athens.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <Link to="/newsletter" className="group flex items-center gap-2 text-white/70 hover:text-primary transition-colors uppercase tracking-[0.2em] text-xs font-bold">
              <span className="material-symbols-outlined text-sm transition-transform group-hover:scale-125">mail</span>
              Subscribe to Newsletter
            </Link>
            <div className="flex gap-8">
                {[
                {
                  name: 'Instagram',
                  url: 'https://www.instagram.com/tedxdereeacg/',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  name: 'TikTok',
                  url: 'https://www.tiktok.com/@tedxdereeacg',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  ),
                },
                {
                  name: 'LinkedIn',
                  url: 'https://www.linkedin.com/company/tedxdereeacg/',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.name}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-primary/50 transition-colors group"
                >
                  <span className="text-white/70 group-hover:text-primary transition-colors">
                    {platform.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-white/20 text-xs uppercase tracking-widest leading-loose max-w-2xl mx-auto">
            This TEDx event is independently organized by Deree ACG students and faculty under license from TED. © 2026 TEDx Deree ACG. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
