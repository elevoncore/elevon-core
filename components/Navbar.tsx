'use client';

import React, { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Team', id: 'team' },
  { label: 'Company', id: 'company' },
  { label: 'Projects', id: 'projects' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef<HTMLElement>(null);

  // Handle Scroll state for dynamic Navbar pill
  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScrollEvent, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  // Scrollspy observer for active section
  useEffect(() => {
    const sections = ['home', 'team', 'company', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-25% 0px -50% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 flex flex-col items-center pointer-events-none transition-all duration-500 ${
        isScrolled ? 'pt-4 sm:pt-5 px-4' : 'pt-6 px-6 md:px-12 lg:px-24'
      }`}
    >
      <nav 
        ref={navRef}
        aria-label="Main Navigation"
        className={`w-full pointer-events-auto flex justify-between items-center transition-all duration-500 ${
          isScrolled 
            ? 'max-w-4xl py-2 px-4 sm:px-6 rounded-full bg-neutral-950/85 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] text-white' 
            : 'max-w-[1400px] py-2 bg-transparent border-transparent shadow-none rounded-none text-white'
        }`}
      >
        {/* Brand & Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, 'home')} 
          className="flex items-center gap-2.5 sm:gap-3 hover:opacity-90 transition-opacity group cursor-pointer"
          aria-label="Elevon Core Home"
        >
          <svg 
            className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-105" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true"
          >
            <path d="M16 3L28 9.5V22.5L16 29L4 22.5V9.5L16 3Z" fill="url(#elevonLogoBg)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            <path d="M12 11H21M12 16H18.5M12 21H21" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
            <defs>
              <linearGradient id="elevonLogoBg" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4f46e5" />
                <stop offset="1" stopColor="#9333ea" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-sm sm:text-base font-bold tracking-tight text-white font-display">
            Elevon Core
          </span>
        </a>
        
        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => handleScroll(e, item.id)} 
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white/20 text-white font-semibold shadow-sm'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Section: CTA & Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className="px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shadow-md hover:scale-105 active:scale-95 hidden sm:inline-block bg-white text-zinc-950 hover:bg-neutral-200"
          >
            Let&apos;s talk
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-nav-menu"
          className="w-full max-w-4xl mt-2 pointer-events-auto md:hidden flex flex-col bg-neutral-950/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-4 gap-2 text-white animate-in fade-in slide-in-from-top-4 duration-300"
        >
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={(e) => handleScroll(e, item.id)} 
              className={`text-sm font-medium p-2.5 rounded-xl transition-colors ${
                activeSection === item.id 
                  ? 'bg-white/20 text-white font-semibold' 
                  : 'text-neutral-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')} 
            className="text-sm font-semibold text-center bg-white text-zinc-950 p-2.5 rounded-xl mt-2 hover:bg-neutral-200 transition-colors sm:hidden"
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </header>
  );
}
