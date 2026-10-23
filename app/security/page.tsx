import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security & SLA | Elevon Core',
  description: 'Enterprise security standards, infrastructure protocols, and service level commitments at Elevon Core.',
};

export default function SecurityPage() {
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
              <path d="M16 3L28 9.5V22.5L16 29L4 22.5V9.5L16 3Z" fill="url(#securityLogoBg)" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
              <path d="M12 11H21M12 16H18.5M12 21H21" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
              <defs>
                <linearGradient id="securityLogoBg" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
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
            Infrastructure &amp; Compliance
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Security &amp; SLA Commitments
          </h1>
          <p className="mt-4 text-sm text-zinc-500">
            Effective Date: October 23, 2026 • Last Updated: October 2026
          </p>
        </div>

        <div className="space-y-10 text-zinc-700 leading-relaxed text-base">
          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">1. Security Architecture</h2>
            <p>
              Security at <strong>Elevon Core</strong> is engineered into every layer of our design, architecture, and deployment pipeline. We architect enterprise-grade applications designed to withstand adversarial conditions, data exfiltration attempts, and systemic downtime.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">2. Core Security Controls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50/50">
                <h3 className="font-display font-bold text-zinc-950 mb-2">End-to-End Encryption</h3>
                <p className="text-sm text-zinc-600">
                  Enforced TLS 1.3 in transit with HSTS and AES-256 encryption at rest across databases, key vaults, and serverless runtime state.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50/50">
                <h3 className="font-display font-bold text-zinc-950 mb-2">Least-Privilege RBAC</h3>
                <p className="text-sm text-zinc-600">
                  Zero hardcoded secrets. Strict IAM policies, short-lived tokens, and scoped API roles for all agentic and backend integrations.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50/50">
                <h3 className="font-display font-bold text-zinc-950 mb-2">Automated CI/CD Auditing</h3>
                <p className="text-sm text-zinc-600">
                  Continuous dependency scanning, static code analysis, and automated vulnerability detection integrated into every deployment pipeline.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50/50">
                <h3 className="font-display font-bold text-zinc-950 mb-2">Agent &amp; LLM Guardrails</h3>
                <p className="text-sm text-zinc-600">
                  Prompt injection isolation, input sanitization, and deterministic output validation for all autonomous AI workflow systems.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">3. Service Level Agreement (SLA)</h2>
            <p className="mb-4">
              For production platforms managed under our enterprise engineering retainers, Elevon Core provides the following baseline service level commitments:
            </p>
            <div className="overflow-x-auto border border-zinc-200 rounded-2xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-50 border-b border-zinc-200 text-xs font-bold text-zinc-750 uppercase">
                  <tr>
                    <th className="p-4">Severity Tier</th>
                    <th className="p-4">Definition</th>
                    <th className="p-4">Target Response</th>
                    <th className="p-4">Resolution Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr>
                    <td className="p-4 font-bold text-rose-600">P1 — Critical</td>
                    <td className="p-4 text-zinc-600">Complete outage, database unavailability, or severe data integrity failure.</td>
                    <td className="p-4 font-semibold text-zinc-950">&lt; 30 minutes</td>
                    <td className="p-4 text-zinc-600">&lt; 4 hours</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-amber-600">P2 — Major</td>
                    <td className="p-4 text-zinc-600">Degraded performance, non-critical workflow failure, or intermittent API errors.</td>
                    <td className="p-4 font-semibold text-zinc-950">&lt; 2 hours</td>
                    <td className="p-4 text-zinc-600">&lt; 12 hours</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-indigo-600">P3 — Minor</td>
                    <td className="p-4 text-zinc-600">UI/UX glitch, minor configuration adjustment, or non-blocking inquiry.</td>
                    <td className="p-4 font-semibold text-zinc-950">&lt; 8 hours</td>
                    <td className="p-4 text-zinc-600">&lt; 48 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">4. Uptime Commitment</h2>
            <p>
              Managed cloud infrastructure deployed via our architectures targets <strong>99.9% monthly uptime</strong>, backed by multi-region redundancy, serverless automatic failover, and automated database backups.
            </p>
          </section>

          <section className="border-t border-zinc-200 pt-8">
            <h2 className="font-display text-2xl font-bold text-zinc-950 mb-3">5. Incident Reporting</h2>
            <p>
              To report security vulnerabilities or critical operational incidents, please contact our emergency engineering on-call dispatch directly:
            </p>
            <p className="mt-3 font-semibold text-zinc-950">
              Security Desk: <a href="mailto:elevoncore@gmail.com" className="text-indigo-600 hover:underline">elevoncore@gmail.com</a>
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
