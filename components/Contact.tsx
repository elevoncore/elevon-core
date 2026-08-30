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
      // First attempt via internal /api/contact route
      let res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let data = await res.json().catch(() => null);

      // If internal route needs key or failed, submit directly to Web3Forms API
      if (!res.ok && (!data || data.needKey)) {
        const fallbackRes = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            access_key: '935b2fe3-c034-4c21-9905-2e2d7edf248c',
            name: formData.name,
            email: formData.email,
            company: formData.company || 'N/A',
            phone: formData.phone || 'N/A',
            subject: `[Elevon Core Website] ${formData.subject}`,
            message: formData.message,
            from_name: `${formData.name} (Elevon Core Form)`,
          }),
        });

        data = await fallbackRes.json();
        if (fallbackRes.ok && data.success) {
          res = fallbackRes;
        }
      }

      if (data && data.success) {
        setStatus('success');
        setResponseMsg('Thank you! Your message has been sent to elevoncore@gmail.com.');
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
        setResponseMsg(data?.error || data?.message || 'Failed to send message. Please try again or email directly.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setResponseMsg('An error occurred. Please try again or contact elevoncore@gmail.com directly.');
    }
  };

  return (
    <section 
      id="contact" 
      className="w-full flex flex-col justify-center items-center z-10 px-4 py-8 min-h-screen md:h-[100dvh] md:snap-start md:snap-always md:shrink-0 md:overflow-hidden"
    >
      <div className="w-full max-w-6xl relative rounded-3xl overflow-hidden glass-card p-6 md:py-8 md:px-12 border border-[var(--card-border)] bg-[var(--card-bg)]">
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Column: Text & Direct Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-4 tracking-tight">
                Let's work together
              </h2>
              <p className="text-[var(--text-muted)] text-sm md:text-base leading-relaxed mt-3">
                Have an ambitious project in mind, need operational automation, or looking for high-performance software engineering? Reach out to us directly or fill out the form.
              </p>
            </div>
            
            <div className="mt-8 md:mt-auto">
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider block mb-1">Direct Inquiries</span>
              <a href="mailto:elevoncore@gmail.com" className="text-[var(--text-main)] hover:text-indigo-400 transition underline decoration-current underline-offset-4 text-lg font-medium">
                elevoncore@gmail.com
              </a>
              <p className="text-[var(--text-muted)] text-xs mt-3">
                We review all client submissions and typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: The Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[var(--text-muted)]">Full name*</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-transparent border-b border-[var(--input-border)] focus:border-indigo-500 outline-none py-2 text-[var(--text-main)] placeholder:text-[var(--text-muted)] transition" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[var(--text-muted)]">Work Email*</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="bg-transparent border-b border-[var(--input-border)] focus:border-indigo-500 outline-none py-2 text-[var(--text-main)] placeholder:text-[var(--text-muted)] transition" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[var(--text-muted)]">Company name (optional)</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className="bg-transparent border-b border-[var(--input-border)] focus:border-indigo-500 outline-none py-2 text-[var(--text-main)] placeholder:text-[var(--text-muted)] transition" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[var(--text-muted)]">Phone number (optional)</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="bg-transparent border-b border-[var(--input-border)] focus:border-indigo-500 outline-none py-2 text-[var(--text-main)] placeholder:text-[var(--text-muted)] transition" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-[var(--text-muted)]">Subject / Reason for contact*</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="New project inquiry / AI automation"
                className="bg-transparent border-b border-[var(--input-border)] focus:border-indigo-500 outline-none py-2 text-[var(--text-main)] placeholder:text-[var(--text-muted)] transition" 
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-[var(--text-muted)]">Message*</label>
              <textarea 
                rows={2} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project requirements..."
                className="bg-transparent border-b border-[var(--input-border)] focus:border-indigo-500 outline-none py-1 text-[var(--text-main)] placeholder:text-[var(--text-muted)] transition resize-none" 
              ></textarea>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-sm text-center">
                ✓ {responseMsg}
              </div>
            )}

            {status === 'error' && (
              <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-300 text-sm text-center">
                ✕ {responseMsg}
              </div>
            )}

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full mt-2 bg-[var(--btn-invert-bg)] text-[var(--btn-invert-text)] font-semibold py-3 rounded-full hover:opacity-90 transition shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
