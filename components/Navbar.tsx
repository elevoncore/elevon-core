'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('elevon-theme') as 'dark' | 'light' | null;
    const initialTheme = saved || 'dark';
    setTheme(initialTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    if (document.body) {
      document.body.setAttribute('data-theme', initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(next);
    document.documentElement.setAttribute('data-theme', next);
    if (document.body) {
      document.body.setAttribute('data-theme', next);
    }
    localStorage.setItem('elevon-theme', next);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="fixed top-4 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="w-full max-w-4xl pointer-events-auto flex justify-between items-center py-2.5 px-4 sm:px-6 rounded-full bg-[var(--nav-bg)] backdrop-blur-2xl border border-[var(--nav-border)] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] transition-all duration-300">
        
        {/* Brand */}
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, 'home')} 
          className="text-sm sm:text-base font-semibold tracking-wide text-[var(--text-main)] hover:opacity-80 transition-opacity"
        >
          Elevon Core
        </a>
        
        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-[var(--text-muted)]">
          <a 
            href="#home" 
            onClick={(e) => handleScroll(e, 'home')} 
            className="px-3.5 py-1.5 rounded-full hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
          >
            Home
          </a>
          <a 
            href="#team" 
            onClick={(e) => handleScroll(e, 'team')} 
            className="px-3.5 py-1.5 rounded-full hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
          >
            Team
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, 'projects')} 
            className="px-3.5 py-1.5 rounded-full hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')} 
            className="px-3.5 py-1.5 rounded-full hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
          >
            Contact
          </a>
        </div>

        {/* Right Section: Theme Toggle & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-main)] bg-black/5 dark:bg-white/10 border border-[var(--nav-border)] transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className="bg-[var(--btn-invert-bg)] text-[var(--btn-invert-text)] px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium hover:opacity-90 transition-all duration-200 shadow-md hover:scale-105 active:scale-95 inline-block"
          >
            let's talk
          </a>
        </div>
      </nav>
    </header>
  );
}
