'use client';

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'security' | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    if (!activeModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('elevoncore@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      <footer id="footer" className="w-full bg-white p-2 sm:p-3 md:p-4 pb-4 sm:pb-6 mt-20">
        {/* Black card container with slight white border at sides and rounded corners */}
        <div className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-[18px] sm:rounded-[24px] bg-[#000000] text-white flex flex-col items-center">
          
          {/* Main Footer Content Grid */}
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-16 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Column 1 (5 cols): Brand, Mission & Quick Action */}
              <div className="md:col-span-5 flex flex-col gap-6 text-left">
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

                <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                  Digital precision. Automated scale. We build next-generation web platforms, autonomous ERP systems, and machine learning architectures for ambitious teams.
                </p>

                {/* Availability status badge */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Available for high-impact projects</span>
                </div>

                {/* Email Inquiries with quick copy button */}
                <div className="flex items-center gap-2 mt-1">
                  <a 
                    href="mailto:elevoncore@gmail.com" 
                    className="text-sm font-medium text-neutral-300 hover:text-white transition underline decoration-neutral-700 underline-offset-4"
                  >
                    elevoncore@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="text-xs px-2.5 py-1 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Columns 2, 3, 4 (7 cols): Link Columns with balanced spacing */}
              <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
                
                {/* 1. Quick Links */}
                <div className="flex flex-col gap-3.5">
                  <span className="text-xs uppercase tracking-wider text-neutral-300 font-bold mb-1 font-display">
                    Navigation
                  </span>
                  <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-sm text-neutral-400 hover:text-white transition w-fit">Home</a>
                  <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="text-sm text-neutral-400 hover:text-white transition w-fit">The Team</a>
                  <a href="#company" onClick={(e) => handleScroll(e, 'company')} className="text-sm text-neutral-400 hover:text-white transition w-fit">Mission &amp; Vision</a>
                  <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-sm text-neutral-400 hover:text-white transition w-fit">Featured Projects</a>
                  <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-sm text-neutral-400 hover:text-white transition w-fit">Contact Us</a>
                </div>

                {/* 2. Social Media */}
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

                {/* 3. Legal & Policies (Fully Functional Modals) */}
                <div className="flex flex-col gap-3.5">
                  <span className="text-xs uppercase tracking-wider text-neutral-300 font-bold mb-1 font-display">
                    Legal &amp; Trust
                  </span>
                  <button 
                    type="button"
                    onClick={() => setActiveModal('privacy')}
                    className="text-sm text-neutral-400 hover:text-white transition text-left cursor-pointer w-fit"
                  >
                    Privacy Policy
                  </button>
                  <button 
                    type="button"
                    onClick={() => setActiveModal('terms')}
                    className="text-sm text-neutral-400 hover:text-white transition text-left cursor-pointer w-fit"
                  >
                    Terms &amp; Conditions
                  </button>
                  <button 
                    type="button"
                    onClick={() => setActiveModal('security')}
                    className="text-sm text-neutral-400 hover:text-white transition text-left cursor-pointer w-fit"
                  >
                    Security &amp; SLA
                  </button>
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
              <p>© Elevon Core 2026. All Rights Reserved</p>
              <p className="text-neutral-500">Digital precision. Automated scale.</p>
            </div>

          </div>

        </div>
      </footer>

      {/* Interactive Modal Dialog for Privacy, Terms, and Security */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-white max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b border-neutral-800">
              <h3 id="modal-title" className="font-display text-xl font-bold text-white">
                {activeModal === 'privacy' && 'Privacy Policy'}
                {activeModal === 'terms' && 'Terms & Conditions'}
                {activeModal === 'security' && 'Security & Data Commitments'}
              </h3>
              <button 
                type="button" 
                onClick={() => setActiveModal(null)}
                className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition cursor-pointer"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="mt-5 space-y-4 text-sm text-neutral-300 leading-relaxed">
              {activeModal === 'privacy' && (
                <>
                  <p>
                    At <strong>Elevon Core</strong>, we believe in privacy by design. We respect your confidentiality and only collect information essential for delivering our software engineering, AI workflow, and consulting services.
                  </p>
                  <h4 className="font-semibold text-white mt-4">1. Information We Collect</h4>
                  <p>
                    When you contact us through our website, we collect your name, email, company, and message details solely to respond to your inquiry and scope potential engagements.
                  </p>
                  <h4 className="font-semibold text-white mt-4">2. Zero Third-Party Monetization</h4>
                  <p>
                    We never sell, rent, or lease client data, project specifications, or contact information to any third parties or advertisers.
                  </p>
                  <h4 className="font-semibold text-white mt-4">3. Security</h4>
                  <p>
                    All communications and form transmissions are encrypted in transit via standard TLS/SSL protocols. Inquiries are stored in secure, access-controlled repositories.
                  </p>
                </>
              )}

              {activeModal === 'terms' && (
                <>
                  <p>
                    These Terms &amp; Conditions govern the use of the <strong>Elevon Core</strong> website and outline the principles of our client software engineering partnerships.
                  </p>
                  <h4 className="font-semibold text-white mt-4">1. Intellectual Property</h4>
                  <p>
                    Custom applications, codebases, and automation workflows engineered for our clients become the property of the respective client in accordance with our bilateral Master Services Agreement (MSA).
                  </p>
                  <h4 className="font-semibold text-white mt-4">2. Deliverables &amp; Code Quality</h4>
                  <p>
                    Elevon Core adheres to high engineering standards, writing performant, maintainable, and audited code across modern web ecosystems and agentic systems.
                  </p>
                  <h4 className="font-semibold text-white mt-4">3. Contact &amp; Governance</h4>
                  <p>
                    For specific contract inquiries or partnership agreements, reach out directly to <code>elevoncore@gmail.com</code>.
                  </p>
                </>
              )}

              {activeModal === 'security' && (
                <>
                  <p>
                    Security and operational resilience are central to everything we architect at <strong>Elevon Core</strong>.
                  </p>
                  <h4 className="font-semibold text-white mt-4">1. Cloud &amp; Automation Safety</h4>
                  <p>
                    We architect serverless, containerized, and AI pipelines following least-privilege access rules, environment variable protection, and strict secret hygiene.
                  </p>
                  <h4 className="font-semibold text-white mt-4">2. Continuous Auditing</h4>
                  <p>
                    Codebases are continuously vetted for dependency vulnerabilities, runtime errors, and accessibility compliance.
                  </p>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-end">
              <button 
                type="button" 
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-white text-zinc-950 hover:bg-neutral-200 font-semibold text-sm transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
