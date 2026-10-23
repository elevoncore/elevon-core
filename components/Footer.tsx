'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-white p-2 sm:p-3 md:p-4 pb-4 sm:pb-6 mt-20">
      {/* Black card container with slight white border at sides and rounded corners */}
      <div className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-[18px] sm:rounded-[24px] bg-[#000000] text-white flex flex-col items-center">
        
        {/* Main Footer Content Grid */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-16 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Column 1 (5 cols): Brand & Mission */}
            <div className="md:col-span-5 flex flex-col gap-4 text-left">
              {/* Logo & Name */}
              <div className="flex items-center gap-3">
                <svg 
                  className="w-8 h-8" 
                  viewBox="0 0 32 32" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  aria-hidden="true"
                >
                  <path d="M16 3L28 9.5V22.5L16 29L4 22.5V9.5L16 3Z" fill="url(#elevonFooterLogo2)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                  <path d="M12 11H21M12 16H18.5M12 21H21" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="elevonFooterLogo2" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4f46e5" />
                      <stop offset="1" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Elevon Core
                </span>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed max-w-md mt-1">
                Digital precision. Automated scale. We engineer next-generation web architectures, autonomous workflow systems, and enterprise software solutions.
              </p>
            </div>

            {/* Columns 2, 3, 4 (7 cols): Link Columns with balanced spacing */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
              
              {/* 1. Capabilities & Core Engineering */}
              <div className="flex flex-col gap-3.5">
                <span className="text-xs uppercase tracking-wider text-neutral-300 font-bold mb-1 font-display">
                  Capabilities
                </span>
                <span className="text-sm text-neutral-400">AI Engineering</span>
                <span className="text-sm text-neutral-400">Full Stack Systems</span>
                <span className="text-sm text-neutral-400">Workflow Automation</span>
              </div>

              {/* 2. Connect */}
              <div className="flex flex-col gap-3.5">
                <span className="text-xs uppercase tracking-wider text-neutral-300 font-bold mb-1 font-display">
                  Connect
                </span>
                <a 
                  href="https://github.com/elevoncore" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-neutral-400 hover:text-white transition inline-flex items-center gap-2 group w-fit"
                >
                  <FaGithub size={15} className="text-neutral-500 group-hover:text-white transition-colors" />
                  <span>GitHub</span>
                  <FaExternalLinkAlt size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/haiderkashan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-neutral-400 hover:text-white transition inline-flex items-center gap-2 group w-fit"
                >
                  <FaLinkedin size={15} className="text-neutral-500 group-hover:text-white transition-colors" />
                  <span>LinkedIn</span>
                  <FaExternalLinkAlt size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="mailto:elevoncore@gmail.com" 
                  className="text-sm text-neutral-400 hover:text-white transition inline-flex items-center gap-2 group w-fit"
                >
                  <FaEnvelope size={15} className="text-neutral-500 group-hover:text-white transition-colors" />
                  <span>Email Direct</span>
                </a>
              </div>

              {/* 3. Legal & Trust (Direct Links to Individual Full Pages) */}
              <div className="flex flex-col gap-3.5">
                <span className="text-xs uppercase tracking-wider text-neutral-300 font-bold mb-1 font-display">
                  Legal &amp; Trust
                </span>
                <Link 
                  href="/privacy" 
                  className="text-sm text-neutral-400 hover:text-white transition w-fit"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-sm text-neutral-400 hover:text-white transition w-fit"
                >
                  Terms &amp; Conditions
                </Link>
                <Link 
                  href="/security" 
                  className="text-sm text-neutral-400 hover:text-white transition w-fit"
                >
                  Security &amp; SLA
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Giant Typography & Bottom Bar */}
        <div className="w-full border-t border-neutral-900 pt-14 flex flex-col items-center relative">
          
          {/* Giant SVG Background Text - Full Width Original Massive Size */}
          <div className="w-full px-2 md:px-6 pointer-events-none select-none">
            <svg 
              aria-hidden="true"
              className="w-full h-auto" 
              viewBox="0 0 1000 280" 
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="textFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e5e7eb" />    
                  <stop offset="50%" stopColor="#4b5563" />   
                  <stop offset="100%" stopColor="#0a0a0a" />  
                </linearGradient>
              </defs>
              <text 
                x="50%" 
                y="85%" 
                textAnchor="middle" 
                fill="url(#textFade)" 
                className="font-bold tracking-tighter font-display" 
                style={{ fontSize: "300px" }}
              >
                Elevon
              </text>
            </svg>
          </div>

          {/* Tiny Bottom Copyright Bar */}
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex flex-col md:flex-row justify-between items-center mt-6 pb-8 text-xs text-neutral-400 gap-4">
            <p>© {new Date().getFullYear()} Elevon Core. All Rights Reserved</p>
            <p className="text-neutral-500">Digital precision. Automated scale.</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
