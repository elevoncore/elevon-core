import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Elevon Core',
  description: 'Privacy Policy and data governance commitments for Elevon Core software engineering.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 flex flex-col selection:bg-indigo-600 selection:text-white">
      <Navbar />

      {/* Main Plain Document Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-6 sm:px-8 pt-32 sm:pt-40 pb-20">
        
        {/* Breadcrumb & Header */}
        <div className="mb-10 pb-8 border-b border-zinc-200">
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors mb-6 group"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            <span>Back to Home</span>
          </Link>

          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Privacy Policy
          </h1>

          <p className="mt-3 text-base text-zinc-600">
            Our data sovereignty principles, technical governance, and client confidentiality standards.
          </p>

          <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500 font-mono">
            <span>Last Updated: October 2026</span>
            <span>•</span>
            <span>Elevon Core Software Engineering</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-zinc max-w-none text-zinc-600 leading-relaxed text-base space-y-10">
          
          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              1. Engineering Philosophy &amp; Data Ethics
            </h2>
            <p>
              Elevon Core is a specialized software engineering team. We architect high-performance web applications, enterprise systems, and automated pipelines. We view data privacy not as a static regulatory formality, but as an architectural discipline: we only collect what is strictly necessary to scope, deliver, and support client software.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information transparently across two primary touchpoints:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="font-display font-semibold text-zinc-900 text-sm mb-1">Direct Project Inquiries</h3>
                <p className="text-sm text-zinc-600">
                  When you submit our contact form or email our team, we collect your full name, work email, organization name, phone number, and project brief. This information is used exclusively to respond to your inquiry and prepare engineering proposals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="font-display font-semibold text-zinc-900 text-sm mb-1">Infrastructure Logs</h3>
                <p className="text-sm text-zinc-600">
                  Standard server logs (IP address, user-agent string, and request timestamps) are processed transiently for routing, DDoS defense, and server health.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              3. Zero Third-Party Monetization
            </h2>
            <p>
              We do not sell, rent, monetize, or trade client data, contact lists, or project specifications to data brokers or advertising platforms. We do not deploy third-party remarketing pixels or cross-site tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              4. Cryptographic Security &amp; Transmission
            </h2>
            <p>
              All traffic between your browser and our web platform is encrypted in transit using enforced TLS 1.3 protocols. Production database state, API secrets, and server environment variables are cryptographically isolated in hardware-backed secret vaults following zero-trust access control.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              5. Data Sovereignty &amp; Your Rights
            </h2>
            <p>
              You maintain full sovereignty over your personal data. You have the right to request access to, correction of, or permanent deletion of any contact information held in our records at any time with zero friction.
            </p>
          </section>

          <section className="pt-6 border-t border-zinc-200">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              6. Direct Privacy Inquiries
            </h2>
            <p>
              If you have questions regarding our data practices, proprietary NDAs, or technical governance, contact our engineering leads directly:
            </p>
            <p className="mt-3 font-semibold text-zinc-950">
              Email: <a href="mailto:elevoncore@gmail.com" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">elevoncore@gmail.com</a>
            </p>
          </section>

        </div>
      </main>

      {/* Signature Site Footer */}
      <Footer />
    </div>
  );
}
