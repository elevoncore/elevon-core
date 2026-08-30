'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Theme
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

  // Handle Scroll state for dynamic Navbar styling
  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
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
    setIsMobileMenuOpen(false); // Close mobile menu on click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 flex flex-col items-center pointer-events-none transition-all duration-500 ${
        isScrolled ? 'pt-4 sm:pt-5 px-4' : 'pt-6 px-6 md:px-12 lg:px-24'
      }`}
    >
      <nav 
        className={`w-full pointer-events-auto flex justify-between items-center transition-all duration-500 ${
          isScrolled 
            ? 'max-w-4xl py-2.5 px-4 sm:px-6 rounded-full bg-[var(--nav-bg)] backdrop-blur-2xl border border-[var(--nav-border)] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]' 
            : 'max-w-[1400px] py-2 bg-transparent border-transparent shadow-none rounded-none'
        }`}
      >
        
        {/* Brand & Logo */}
        <div className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="/vercel.svg" 
            alt="Elevon Logo" 
            // Forces the logo to be white when at the top, regardless of theme
            className={`w-6 h-6 sm:w-8 sm:h-8 object-contain transition-all ${
              !isScrolled ? 'brightness-0 invert' : 'dark:invert'
            }`} 
          />
          <a 
            href="#home" 
            onClick={(e) => handleScroll(e, 'home')} 
            className={`text-sm sm:text-base font-bold tracking-wide transition-colors ${
              isScrolled ? 'text-[var(--text-main)]' : 'text-white'
            }`}
          >
            Elevon Core
          </a>
        </div>
        
        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
          {['Home', 'Team', 'Projects'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleScroll(e, item.toLowerCase())} 
              className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                isScrolled 
                  ? 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/10' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Section: Theme Toggle, CTA, & Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${
              isScrolled
                ? 'text-[var(--text-muted)] hover:text-[var(--text-main)] bg-black/5 dark:bg-white/10 border border-transparent hover:border-[var(--nav-border)]'
                : 'text-white/80 hover:text-white bg-white/10 border border-white/10 hover:border-white/30'
            }`}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${isScrolled ? 'text-indigo-600' : 'text-white'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className={`px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shadow-md hover:scale-105 active:scale-95 hidden sm:inline-block ${
              isScrolled
                ? 'bg-[var(--btn-invert-bg)] text-[var(--btn-invert-text)] hover:opacity-90'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            Let's talk
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            className={`md:hidden p-1 transition-colors ${
              isScrolled ? 'text-[var(--text-main)]' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu (Remains tied to theme variables since it has a solid background) */}
      {isMobileMenuOpen && (
        <div className="w-full max-w-4xl mt-2 pointer-events-auto md:hidden flex flex-col bg-[var(--nav-bg)] backdrop-blur-2xl border border-[var(--nav-border)] rounded-2xl shadow-lg p-4 gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          {['Home', 'Team', 'Projects'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleScroll(e, item.toLowerCase())} 
              className="text-sm font-medium text-[var(--text-main)] p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg"
            >
              {item}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-sm font-medium text-center bg-[var(--btn-invert-bg)] text-[var(--btn-invert-text)] p-2 rounded-lg mt-2 sm:hidden">
            Let's talk
          </a>
        </div>
      )}
    </header>
  );
}