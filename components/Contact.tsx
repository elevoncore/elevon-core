'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus('success');
        setResponseMsg('Thank you! Your message has been sent to our team.');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('error');
        setResponseMsg(data?.error || 'Failed to send message. Please try again or email elevoncore@gmail.com directly.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setResponseMsg('An unexpected network error occurred. Please contact elevoncore@gmail.com directly.');
    }
  };

  return (
    <section 
      id="contact" 
      className="scroll-mt-24 w-full max-w-6xl z-10 px-4 py-20 flex flex-col justify-center items-center"
    >
      <div className="w-full relative rounded-3xl glass-card p-6 sm:p-10 md:p-14 border border-zinc-200/90 shadow-xl">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          
          {/* Left Column: Text & Direct Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-zinc-950 mb-4 tracking-tight">
                Let&apos;s work together
              </h2>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mt-4">
                Have an ambitious project in mind, need operational automation, or looking for high-performance software engineering? Reach out to us directly or fill out the form.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-zinc-200">
              <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1 font-semibold">
                Direct Inquiries
              </span>
              <a 
                href="mailto:elevoncore@gmail.com" 
                className="text-zinc-900 hover:text-indigo-600 transition font-display text-xl font-bold underline decoration-indigo-300 underline-offset-4"
              >
                elevoncore@gmail.com
              </a>
              <p className="text-zinc-500 text-xs mt-3">
                We review all client submissions and typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: The Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs font-semibold text-zinc-700">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition text-sm" 
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs font-semibold text-zinc-700">
                  Work Email *
                </label>
                <input 
                  type="email" 
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition text-sm" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-company" className="text-xs font-semibold text-zinc-700">
                  Company Name (optional)
                </label>
                <input 
                  type="text" 
                  id="contact-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition text-sm" 
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-phone" className="text-xs font-semibold text-zinc-700">
                  Phone Number (optional)
                </label>
                <input 
                  type="tel" 
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition text-sm" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-subject" className="text-xs font-semibold text-zinc-700">
                Subject / Inquiry *
              </label>
              <input 
                type="text" 
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="New project inquiry / AI automation"
                className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition text-sm" 
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs font-semibold text-zinc-700">
                Message *
              </label>
              <textarea 
                rows={3} 
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project requirements..."
                className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition text-sm resize-none" 
              />
            </div>

            {/* Status Live Region Announcements */}
            <div role="status" aria-live="polite">
              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm text-center font-medium">
                  ✓ {responseMsg}
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-sm text-center font-medium">
                  ✕ {responseMsg}
                </div>
              )}
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full mt-2 bg-zinc-950 text-white font-semibold py-3 rounded-xl hover:bg-zinc-800 active:scale-[0.99] transition shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Sending Message...</span>
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
