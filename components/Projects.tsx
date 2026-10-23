import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 w-full max-w-6xl z-10 px-4 py-20 flex flex-col items-center">
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-950 text-center">
        Our Projects
      </h2>
      <p className="text-zinc-500 text-base md:text-lg mb-12 max-w-xl text-center">
        Engineered systems in production, delivering automated precision and scale.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Project 1: Real Estate CRM */}
        <div className="glass-card p-6 rounded-2xl flex flex-col group border border-zinc-200/80 hover:border-indigo-400/60 transition-all duration-300">
          
          {/* Image Container */}
          <div className="w-full aspect-[2.15/1] rounded-xl mb-6 overflow-hidden relative border border-zinc-200 bg-zinc-100 flex items-center justify-center">
            <Image
              src="/estate-pulse.png"
              alt="Estate Pulse CRM Preview"
              width={1024}
              height={474}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h3 className="font-display text-xl font-bold mb-2 text-zinc-900">
            Estate Pulse
          </h3>
          <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-grow">
            A robust Customer Relationship Management platform tailored for the real estate industry. Engineered to streamline property management, track client interactions, and optimize the sales pipeline.
          </p>
          <div className="flex gap-3 mt-auto pt-2">
            <a 
              href="https://github.com/haiderkashan/real-estate-crm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2.5 rounded-xl text-sm font-semibold transition shadow-sm"
            >
              GitHub
            </a>
            <a 
              href="https://real-estate-crm-obsa.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 text-center py-2.5 rounded-xl text-sm font-semibold transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2: Inscribe AI */}
        <div className="glass-card p-6 rounded-2xl flex flex-col group border border-zinc-200/80 hover:border-indigo-400/60 transition-all duration-300">
          {/* Image Container */}
          <div className="w-full aspect-[2.15/1] rounded-xl mb-6 overflow-hidden relative border border-zinc-200 bg-zinc-100 flex items-center justify-center">
            <Image
              src="/inscribe-ai.png"
              alt="Inscribe AI Preview"
              width={1024}
              height={484}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h3 className="font-display text-xl font-bold mb-2 text-zinc-900">
            Inscribe AI
          </h3>
          <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-grow">
            The next generation of AI-powered double-entry bookkeeping and ERP engine. Delivers automated COGS, WAC inventory tracking, and real-time financial reporting with autonomous precision.
          </p>
          <div className="flex gap-3 mt-auto pt-2">
            <a 
              href="https://github.com/elevoncore/ai-bookkeeper" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2.5 rounded-xl text-sm font-semibold transition shadow-sm"
            >
              GitHub
            </a>
            <a 
              href="https://ai-bookkeeper-coral.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 text-center py-2.5 rounded-xl text-sm font-semibold transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 3: In Development */}
        <div className="glass-card p-6 rounded-2xl flex flex-col group border border-zinc-200/80 hover:border-teal-400/60 transition-all duration-300">
          <div className="w-full aspect-[2.15/1] bg-gradient-to-br from-zinc-100 to-zinc-200/80 rounded-xl mb-6 flex items-center justify-center border border-zinc-200 overflow-hidden relative">
            <div className="flex flex-col items-center gap-1.5 z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-zinc-600 text-xs font-bold tracking-widest uppercase">Incoming Release</span>
            </div>
          </div>
          <h3 className="font-display text-xl font-bold mb-2 text-zinc-900">
            Autonomous Systems
          </h3>
          <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-grow">
            Our engineering team is actively building the next generation of scalable web applications and AI agent workflows. Check back soon for our latest ambitious software release.
          </p>
          <div className="flex gap-3 mt-auto pt-2">
            <button 
              disabled 
              className="w-full bg-zinc-100 text-zinc-400 border border-zinc-200 text-center py-2.5 rounded-xl text-sm font-medium cursor-not-allowed"
            >
              In Development
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
