import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Elevon Core',
  description: 'Terms and Conditions governing engineering services and platform usage at Elevon Core.',
};

export default function TermsPage() {
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
              <path d="M16 3L28 9.5V22.5L16 29L4 22.5V9.5L16 3Z" fill="url(#termsLogoBg)" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
              <path d="M12 11H21M12 16H18.5M12 21H21" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
              <defs>
                <linearGradient id="termsLogoBg" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
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
            Governance &amp; Engagement
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-zinc-500">
            Effective Date: October 23, 2026 • Last Updated: October 2026
          </p>
        </div>

        <div className="space-y-10 text-zinc-700 leading-relaxed text-base">
          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing the <strong>Elevon Core</strong> website or engaging our software engineering, AI workflow orchestration, or digital architecture services, you agree to be bound by these Terms &amp; Conditions and any accompanying Statements of Work (SOW) or Master Services Agreements (MSA).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">2. Scope of Services</h2>
            <p>
              Elevon Core engineers bespoke web applications, enterprise ERP systems, machine learning integrations, and autonomous automation pipelines. Specific deliverables, project milestones, acceptance criteria, and warranties are governed by individual client contracts executed prior to project kickoff.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">3. Intellectual Property Rights</h2>
            <p className="mb-3">
              We respect clear boundaries regarding intellectual property:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Client Deliverables:</strong> Upon receipt of full payment for agreed milestones, all custom software deliverables, business logic, and bespoke codebases transfer to the client as work-for-hire.</li>
              <li><strong>Pre-Existing Tools &amp; Libraries:</strong> Elevon Core retains ownership of pre-existing internal frameworks, open-source utilities, and generic development scaffolding incorporated into the project, granting the client a perpetual, non-exclusive license for their use.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">4. Client Responsibilities</h2>
            <p>
              Clients are responsible for providing timely access to necessary third-party APIs, credentials, operational domain knowledge, and prompt milestone review. Delays in providing required inputs may adjust agreed development timelines.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">5. Warranties &amp; Code Quality</h2>
            <p>
              We deliver code written to modern production standards, verified with automated testing, continuous integration, and type safety. We provide a post-launch warranty period (as defined in your project SOW) to address and resolve any defects originating from delivered specifications.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Elevon Core shall not be liable for indirect, incidental, or consequential damages resulting from platform downtime, third-party API outages, or unauthorized third-party access beyond our reasonable operational control.
            </p>
          </section>

          <section className="border-t border-zinc-200 pt-8">
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">7. Contact &amp; Legal Notices</h2>
            <p>
              For legal inquiries, contract execution, or partnership terms, contact:
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
