'use client';

import Image from 'next/image';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <section id="home" className="snap-start w-full min-h-[90vh] flex flex-col items-center justify-center text-center z-10 px-4 pt-20 sm:pt-24">
      <h1 
       className="text-4xl sm:text-5xl md:text-7xl font-medium leading-tight text-[var(--text-main)] mb-6 font-display"
        >
          engineering the edge <br />
          in every product we build
        </h1>
      
      <p className="text-xl text-[var(--text-muted)] mb-12">
        Digital precision. Automated scale.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-medium transition shadow-[0_0_30px_rgba(79,70,229,0.4)] inline-block">
          view projects
        </a>
        
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex -space-x-3">
             <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-black z-30 shadow-md relative bg-[#fca5a5]">
               <Image src="/mudassar-zoom.jpg" alt="Mudassar" width={40} height={40} className="w-full h-full object-cover scale-105" />
             </div>
             <div className="w-10 h-10 rounded-full bg-[#6ee7b7] flex items-center justify-center text-black font-bold text-sm border-2 border-black z-20 shadow-md">
               K
             </div>
             <div className="w-10 h-10 rounded-full bg-[#f472b6] flex items-center justify-center text-black font-bold text-sm border-2 border-black z-10 shadow-md">
               A
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
