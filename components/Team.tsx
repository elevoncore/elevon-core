import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24 w-full max-w-6xl z-10 px-4 py-20 flex flex-col items-center">
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-950 text-center">
        The Team
      </h2>
      <p className="text-zinc-500 text-base md:text-lg mb-12 max-w-xl text-center">
        Meet the engineers crafting resilient architectures and autonomous workflows.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Member 1: Mudassar */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-t-2 border-t-indigo-500">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-indigo-200 shadow-md relative bg-indigo-50">
            <Image 
              src="/mudassar-zoom.jpg" 
              alt="Mudassar" 
              width={80} 
              height={80} 
              className="w-full h-full object-cover scale-105"
            />
          </div>
          <h3 className="font-display text-xl font-bold mb-1 text-zinc-900">Mudassar</h3>
          <p className="text-xs text-indigo-600 mb-4 font-semibold uppercase tracking-wider">
            Software Engineer | Web Dev &amp; Automation
          </p>
          <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
            Specializing in modern web architectures and streamlined operational systems. Builds dynamic, high-performance applications using React, Next.js, and Tailwind CSS, while engineering powerful, time-saving automation workflows.
          </p>
          <div className="flex gap-4 mt-6">
            <a 
              href="https://www.linkedin.com/in/themudassarawan" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Mudassar's LinkedIn profile"
              className="text-zinc-400 hover:text-[#0a66c2] hover:scale-110 transition-all duration-200 p-1"
            >
              <FaLinkedin size={22} />
            </a>
            <a 
              href="https://github.com/themudassarawan" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Mudassar's GitHub profile"
              className="text-zinc-400 hover:text-zinc-950 hover:scale-110 transition-all duration-200 p-1"
            >
              <FaGithub size={22} />
            </a>
            <a 
              href="https://github.com/themudassarawan" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Mudassar's Portfolio and Projects" 
              className="text-zinc-400 hover:text-emerald-600 hover:scale-110 transition-all duration-200 p-1"
            >
              <FaGlobe size={22} />
            </a>
          </div>
        </div>

        {/* Member 2: Kashan */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-t-2 border-t-purple-500">
          <div className="w-20 h-20 rounded-full bg-purple-100 border-2 border-purple-200 text-purple-700 text-2xl font-bold flex items-center justify-center mb-4 shadow-md font-display">
            K
          </div>
          <h3 className="font-display text-xl font-bold mb-1 text-zinc-900">Kashan</h3>
          <p className="text-xs text-indigo-600 mb-4 font-semibold uppercase tracking-wider">
            Software Engineer | ML &amp; Web Dev
          </p>
          <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
            Bridging the gap between intelligent algorithms and responsive user interfaces. Focused on training and integrating machine learning models into robust web applications to deliver smart, data-driven digital experiences.
          </p>
          <div className="flex gap-4 mt-6">
            <a 
              href="https://www.linkedin.com/in/haiderkashan" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Kashan's LinkedIn profile"
              className="text-zinc-400 hover:text-[#0a66c2] hover:scale-110 transition-all duration-200 p-1"
            >
              <FaLinkedin size={22} />
            </a>
            <a 
              href="https://github.com/haiderkashan" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Kashan's GitHub profile"
              className="text-zinc-400 hover:text-zinc-950 hover:scale-110 transition-all duration-200 p-1"
            >
              <FaGithub size={22} />
            </a>
            <a 
              href="https://github.com/haiderkashan" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Kashan's Portfolio and Projects" 
              className="text-zinc-400 hover:text-emerald-600 hover:scale-110 transition-all duration-200 p-1"
            >
              <FaGlobe size={22} />
            </a>
          </div>
        </div>

        {/* Member 3: Abdullah */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-t-2 border-t-sky-500">
          <div className="w-20 h-20 rounded-full bg-sky-100 border-2 border-sky-200 text-sky-700 text-2xl font-bold flex items-center justify-center mb-4 shadow-md font-display">
            A
          </div>
          <h3 className="font-display text-xl font-bold mb-1 text-zinc-900">Abdullah</h3>
          <p className="text-xs text-indigo-600 mb-4 font-semibold uppercase tracking-wider">
            Software Engineer | Sr. Full Stack Dev
          </p>
          <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
            Architecting end-to-end solutions with a focus on scalable and secure systems. Drives the full development lifecycle to ensure flawless integration between complex backend infrastructure and seamless frontend design.
          </p>
          <div className="flex gap-4 mt-6">
            <a 
              href="https://github.com/elevoncore" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Abdullah's LinkedIn profile"
              className="text-zinc-400 hover:text-[#0a66c2] hover:scale-110 transition-all duration-200 p-1"
            >
              <FaLinkedin size={22} />
            </a>
            <a 
              href="https://github.com/elevoncore" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Abdullah's GitHub profile"
              className="text-zinc-400 hover:text-zinc-950 hover:scale-110 transition-all duration-200 p-1"
            >
              <FaGithub size={22} />
            </a>
            <a 
              href="https://github.com/elevoncore" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Abdullah's Portfolio" 
              className="text-zinc-400 hover:text-emerald-600 hover:scale-110 transition-all duration-200 p-1"
            >
              <FaGlobe size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
