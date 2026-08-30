import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="snap-start w-full max-w-6xl z-10 px-4 py-12 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight text-[var(--text-main)]">Our Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Project 1: Real Estate CRM */}
        <div className="glass-card p-6 rounded-2xl flex flex-col border border-[var(--card-border)] hover:border-indigo-500/50 transition-colors duration-300 group">
          
          {/* Image Container */}
          <div className="w-full aspect-[2.15/1] rounded-xl mb-6 overflow-hidden relative border border-[var(--card-border)] group bg-[var(--project-preview-bg)] flex items-center justify-center">
            <Image
              src="/estate-pulse.png"
              alt="Estate Pulse CRM Preview"
              width={1024}
              height={474}
              priority
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            {/* Inner glow border */}
            <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
          </div>

          <h3 className="text-xl font-medium mb-2 text-[var(--text-main)]">Estate Pulse</h3>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 flex-grow">
            A robust Customer Relationship Management platform tailored for the real estate industry. Engineered to streamline property management, track client interactions, and optimize the sales pipeline.
          </p>
          <div className="flex gap-3 mt-auto">
            <a href="https://github.com/haiderkashan/real-estate-crm" target="_blank" rel="noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-center py-2.5 rounded-lg text-sm font-medium transition shadow-[0_0_15px_rgba(79,70,229,0.3)]">
              GitHub
            </a>
            <a href="https://real-estate-crm-obsa.vercel.app" target="_blank" rel="noreferrer" className="flex-1 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[var(--text-main)] text-center py-2.5 rounded-lg text-sm font-medium transition">
              Live 
            </a>
          </div>
        </div>

        {/* Project 2: Inscribe AI */}
        <div className="glass-card p-6 rounded-2xl flex flex-col border border-[var(--card-border)] hover:border-indigo-500/50 transition-colors duration-300 group">
          {/* Image Container */}
          <div className="w-full aspect-[2.15/1] rounded-xl mb-6 overflow-hidden relative border border-[var(--card-border)] group bg-[var(--project-preview-bg)] flex items-center justify-center">
            <Image
              src="/inscribe-ai.png"
              alt="Inscribe AI Preview"
              width={1024}
              height={484}
              priority
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            {/* Inner glow border */}
            <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
          </div>

          <h3 className="text-xl font-medium mb-2 text-[var(--text-main)]">Inscribe AI</h3>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 flex-grow">
            The next generation of AI-powered double-entry bookkeeping and ERP engine. Delivers automated COGS, WAC inventory tracking, and real-time financial reporting with autonomous precision.
          </p>
          <div className="flex gap-3 mt-auto">
            <a href="https://github.com/elevoncore/ai-bookkeeper" target="_blank" rel="noreferrer" className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-center py-2.5 rounded-lg text-sm font-medium transition shadow-[0_0_15px_rgba(79,70,229,0.3)]">
              GitHub
            </a>
            <a href="https://ai-bookkeeper-coral.vercel.app/" target="_blank" rel="noreferrer" className="flex-1 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[var(--text-main)] text-center py-2.5 rounded-lg text-sm font-medium transition">
              Live
            </a>
          </div>
        </div>

        {/* Project 3: In Development */}
        <div className="glass-card p-6 rounded-2xl flex flex-col border border-[var(--card-border)] hover:border-teal-500/50 transition-colors duration-300 group">
          <div className="w-full aspect-[2.15/1] bg-[var(--project-preview-bg)] rounded-xl mb-6 flex items-center justify-center border border-[var(--card-border)] overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-[var(--text-muted)] text-sm font-medium tracking-widest uppercase z-10">Incoming</span>
          </div>
          <h3 className="text-xl font-medium mb-2 text-[var(--text-main)]">Project In Development</h3>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 flex-grow">
            Our engineering team is actively building the next generation of scalable web applications. Check back soon for our latest ambitious software release.
          </p>
          <div className="flex gap-3 mt-auto">
             <button disabled className="flex-1 bg-black/5 dark:bg-gray-800/50 text-[var(--text-muted)] text-center py-2.5 rounded-lg text-sm font-medium cursor-not-allowed">Coming Soon</button>
          </div>
        </div>
      </div>
    </section>
  );
}
