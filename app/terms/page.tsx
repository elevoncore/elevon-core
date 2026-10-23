import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Elevon Core',
  description: 'Terms and Conditions governing engineering services, intellectual property transfer, and delivery terms at Elevon Core.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 flex flex-col selection:bg-indigo-600 selection:text-white">
      <Navbar />

      {/* Main Plain Document Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-6 sm:px-8 pt-32 sm:pt-40 pb-20">
        
        {/* Breadcrumb & Header */}
        <div className="mb-10 pb-8 border-b border-zinc-200">
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-950 transition-colors mb-6 group"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            <span>Back to Home</span>
          </Link>

          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Terms &amp; Conditions
          </h1>

          <p className="mt-3 text-base text-zinc-600">
            Predictable engineering milestones, client intellectual property transfer, and transparent delivery terms.
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
              1. Engineering Engagement &amp; SOWs
            </h2>
            <p>
              Elevon Core operates as an engineering partner shipping high-performance web applications, enterprise ERP engines, and custom automation workflows. Every commercial engagement is defined by an agreed Statement of Work (SOW) specifying deliverables, sprint cadence, milestones, and technical requirements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              2. Intellectual Property &amp; Code Ownership
            </h2>
            <p className="mb-3">
              We stand for unequivocal client ownership of business deliverables:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="font-display font-semibold text-zinc-900 text-sm mb-1">Custom Deliverables</h3>
                <p className="text-sm text-zinc-600">
                  Upon fulfillment of milestone payments, all bespoke software, database schemas, and custom codebases engineered specifically for your platform transfer 100% to your organization as work-for-hire.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="font-display font-semibold text-zinc-900 text-sm mb-1">Core Scaffolding</h3>
                <p className="text-sm text-zinc-600">
                  General open-source frameworks, packages, and internal utility boilerplates incorporated into projects are licensed perpetually and royalty-free to the client.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              3. Milestone Verification &amp; Quality
            </h2>
            <p>
              Deliverables are shipped iteratively. Each milestone concludes with automated test validation, code reviews, and staging previews for client review. Upon written acceptance, deployment to production proceeds according to the deployment schedule.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              4. Code Warranties &amp; Defect Resolution
            </h2>
            <p>
              Elevon Core warrants that all deliverables will conform substantially to the technical specifications defined in the relevant SOW. We provide a post-launch warranty window (stipulated in your project agreement) during which our team will promptly diagnose and resolve any defects arising from delivered code without additional billing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              5. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted under applicable law, Elevon Core shall not be liable for indirect, incidental, or consequential damages resulting from third-party vendor outages, external API deprecations, or security incidents stemming from compromised client credentials.
            </p>
          </section>

          <section className="pt-6 border-t border-zinc-200">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              6. Master Agreements &amp; Legal Notices
            </h2>
            <p>
              For bilateral Master Services Agreements (MSAs), custom NDAs, or enterprise retainer scopes, contact our lead engineers:
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
