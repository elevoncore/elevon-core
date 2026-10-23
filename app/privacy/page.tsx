import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Elevon Core',
  description: 'Privacy Policy and data governance commitments for Elevon Core.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <svg 
              className="w-7 h-7 transition-transform group-hover:scale-105" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
            >
              <path d="M16 3L28 9.5V22.5L16 29L4 22.5V9.5L16 3Z" fill="url(#privacyLogoBg)" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
              <path d="M12 11H21M12 16H18.5M12 21H21" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
              <defs>
                <linearGradient id="privacyLogoBg" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4f46e5" />
                  <stop offset="1" stopColor="#9333ea" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-display font-bold text-lg text-zinc-950">Elevon Core</span>
          </Link>

          <Link 
            href="/"
            className="text-sm font-semibold text-zinc-600 hover:text-zinc-950 px-4 py-2 rounded-full border border-zinc-200 hover:border-zinc-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Legal Content */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 sm:py-20">
        <div className="mb-12 border-b border-zinc-200 pb-8">
          <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase mb-2 block font-display">
            Legal &amp; Data Governance
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-zinc-500">
            Effective Date: October 23, 2026 • Last Updated: October 2026
          </p>
        </div>

        <div className="space-y-10 text-zinc-700 leading-relaxed text-base">
          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">1. Executive Overview</h2>
            <p>
              At <strong>Elevon Core</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we believe that data privacy and system security are fundamental engineering imperatives. We are committed to protecting the privacy of visitors, prospective partners, and clients who interact with our digital platform, applications, and automation systems.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">2. Information We Collect</h2>
            <p className="mb-3">
              We collect information transparently and only to the extent necessary to deliver high-performance software engineering services:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Inquiry &amp; Contact Data:</strong> When you submit a project inquiry or contact request, we collect your name, work email, organization name, phone number, and project brief.</li>
              <li><strong>Technical &amp; Telemetry Data:</strong> Standard server logs including IP addresses, browser types, operating systems, and referral URLs collected strictly for infrastructure integrity and DDoS mitigation.</li>
              <li><strong>Zero Behavioral Advertising:</strong> We do not deploy third-party advertising trackers, cross-site profiling cookies, or behavioral data broker scripts.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">3. How We Use Collected Data</h2>
            <p className="mb-3">
              Your information is processed strictly for legitimate operational purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To evaluate project feasibility, prepare technical scopes, and respond to direct business inquiries.</li>
              <li>To administer client agreements, software deployments, and custom automation infrastructure.</li>
              <li>To maintain the reliability, uptime, and operational security of our web platforms.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">4. Information Sharing &amp; Third Parties</h2>
            <p>
              We do not sell, rent, monetize, or disclose client data or project specifications to any commercial brokers or advertisers. Data is shared exclusively with infrastructure providers essential to application hosting (e.g., Vercel, cloud hosting providers, and transactional email services) subject to strict data confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">5. Data Retention &amp; Security Controls</h2>
            <p>
              All data transmitted through our web services is encrypted using modern TLS (Transport Layer Security) 1.3 standards. Inquiries and operational records are retained only as long as necessary to fulfill contractual obligations or legal compliance. You may request deletion of your contact records at any time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">6. Your Rights</h2>
            <p>
              Depending on your jurisdiction (including GDPR, CCPA/CPRA, and relevant global privacy laws), you have the right to request access to, correction of, or permanent erasure of your personal data held by Elevon Core.
            </p>
          </section>

          <section className="border-t border-zinc-200 pt-8">
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">7. Privacy Inquiries</h2>
            <p>
              For data access requests, privacy concerns, or questions regarding this policy, contact our engineering team directly at:
            </p>
            <p className="mt-3 font-semibold text-zinc-950">
              Email: <a href="mailto:elevoncore@gmail.com" className="text-indigo-600 hover:underline">elevoncore@gmail.com</a>
            </p>
          </section>
        </div>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50 py-8 px-6 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Elevon Core. All Rights Reserved. Digital Precision. Automated Scale.</p>
      </footer>
    </div>
  );
}
