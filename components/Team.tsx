import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

export default function Team() {
  return (
    <section id="team" className="snap-start w-full max-w-6xl z-10 px-4 py-12 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight text-[var(--text-main)]">The Team</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Member 1: Mudassar */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-t-4 border-t-[#fca5a5]">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#fca5a5] shadow-lg relative bg-[#fca5a5]/20">
            <Image 
              src="/mudassar-zoom.jpg" 
              alt="Mudassar" 
              width={80} 
              height={80} 
              priority
              className="w-full h-full object-cover scale-105"
            />
          </div>
          <h3 className="text-xl font-medium mb-1 text-[var(--text-main)]">Mudassar</h3>
          <p className="text-xs text-indigo-500 mb-4 font-medium uppercase tracking-wider">Software Engineer | Web Dev & Automation</p>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-grow">
            Specializing in modern web architectures and streamlined operational systems. Builds dynamic, high-performance applications using React, Next.js, and Tailwind CSS, while engineering powerful, time-saving automation workflows.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://www.linkedin.com/in/themudassarawan" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[#0a66c2] hover:scale-110 transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/themudassarawan" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300">
              <FaGithub size={24} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[#10b981] hover:scale-110 transition-all duration-300" title="Portfolio">
              <FaGlobe size={24} />
            </a>
          </div>
        </div>

        {/* Member 2: Kashan */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-t-4 border-t-[#6ee7b7]">
          <div className="w-20 h-20 rounded-full bg-[#6ee7b7] text-black text-2xl font-bold flex items-center justify-center mb-4">
            K
          </div>
          <h3 className="text-xl font-medium mb-1 text-[var(--text-main)]">Kashan</h3>
          <p className="text-xs text-indigo-500 mb-4 font-medium uppercase tracking-wider">Software Engineer | ML & Web Dev</p>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-grow">
            Bridging the gap between intelligent algorithms and responsive user interfaces. Focused on training and integrating machine learning models into robust web applications to deliver smart, data-driven digital experiences.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://www.linkedin.com/in/haiderkashan" className="text-[var(--text-muted)] hover:text-[#0a66c2] hover:scale-110 transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/haiderkashan" className="text-[var(--text-muted)] hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300">
              <FaGithub size={24} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[#10b981] hover:scale-110 transition-all duration-300" title="Portfolio">
              <FaGlobe size={24} />
            </a>
          </div>
        </div>

        {/* Member 3: Abdullah */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center border-t-4 border-t-[#f472b6]">
          <div className="w-20 h-20 rounded-full bg-[#f472b6] text-black text-2xl font-bold flex items-center justify-center mb-4">
            A
          </div>
          <h3 className="text-xl font-medium mb-1 text-[var(--text-main)]">Abdullah</h3>
          <p className="text-xs text-indigo-500 mb-4 font-medium uppercase tracking-wider">Software Engineer | Sr. Full Stack Dev</p>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-grow">
            Architecting end-to-end solutions with a focus on scalable and secure systems. Drives the full development lifecycle to ensure flawless integration between complex backend infrastructure and seamless frontend design.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-[var(--text-muted)] hover:text-[#0a66c2] hover:scale-110 transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-[var(--text-muted)] hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300">
              <FaGithub size={24} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[#10b981] hover:scale-110 transition-all duration-300" title="Portfolio">
              <FaGlobe size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}