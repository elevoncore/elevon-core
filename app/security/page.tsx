import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Security & SLA | Elevon Core',
  description: 'Enterprise security standards, infrastructure protocols, and service level commitments at Elevon Core.',
};

export default function SecurityPage() {
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
            Security &amp; SLA
          </h1>

          <p className="mt-3 text-base text-zinc-600">
            Zero-trust architectures, automated security pipelines, and high-availability service level commitments.
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
              1. Security-by-Design Architecture
            </h2>
            <p>
              Security at Elevon Core is an architectural discipline woven into every system design. We engineer production web applications, automated workflows, and backend architectures adhering strictly to defense-in-depth principles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              2. Core Engineering Security Controls
            </h2>
            <p className="mb-4">
              Our engineering team deploys multi-layered defensive controls across all production environments:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="font-display font-semibold text-zinc-900 text-sm mb-1">Cryptographic Rigor</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Strict HSTS headers, TLS 1.3 protocol enforcement, and AES-256 database column encryption for sensitive operational data.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="font-display font-semibold text-zinc-900 text-sm mb-1">Secret Hygiene &amp; RBAC</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Zero static credentials committed to Git. Short-lived session tokens and fine-grained least-privilege IAM permissions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="font-display font-semibold text-zinc-900 text-sm mb-1">Automated CI/CD Scans</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Static analysis (SAST), software composition analysis (SCA), and automated dependency vulnerability audits on every pull request.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <h3 className="font-display font-semibold text-zinc-900 text-sm mb-1">Defensive Endpoint Guards</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Global rate-limiting, strict Zod runtime request validation, and SQL/XSS injection immunity across all APIs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              3. Service Level Agreement (SLA)
            </h2>
            <p className="mb-4">
              For production platforms managed under an active Elevon Core engineering retainer, we guarantee the following incident response tiers:
            </p>
            <div className="overflow-x-auto border border-zinc-200 rounded-xl not-prose">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-700 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-4">Severity Tier</th>
                    <th className="p-4">Incident Definition</th>
                    <th className="p-4">Response Target</th>
                    <th className="p-4">Resolution Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-zinc-700">
                  <tr>
                    <td className="p-4 font-bold text-rose-600">P1 — Critical</td>
                    <td className="p-4 text-zinc-600">Complete application downtime or severe core workflow failure.</td>
                    <td className="p-4 font-semibold text-zinc-950">&lt; 30 minutes</td>
                    <td className="p-4 text-zinc-600">&lt; 4 hours</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-amber-600">P2 — Major</td>
                    <td className="p-4 text-zinc-600">Degraded feature performance with significant workflow disruption.</td>
                    <td className="p-4 font-semibold text-zinc-950">&lt; 2 hours</td>
                    <td className="p-4 text-zinc-600">&lt; 12 hours</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-indigo-600">P3 — Minor</td>
                    <td className="p-4 text-zinc-600">Non-critical inquiry, cosmetic tweak, or routine configuration adjustment.</td>
                    <td className="p-4 font-semibold text-zinc-950">&lt; 8 hours</td>
                    <td className="p-4 text-zinc-600">&lt; 48 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="pt-6 border-t border-zinc-200">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              4. Security Desk &amp; Incident Dispatch
            </h2>
            <p>
              To report an infrastructure incident or request an engineering security walkthrough, contact our engineering desk directly:
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
