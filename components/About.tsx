export default function About() {
  return (
    <section id="about" className="scroll-mt-24 w-full max-w-6xl z-10 px-4 py-20 flex flex-col items-center">
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-center text-zinc-950">
        About Us
      </h2>
      <p className="text-zinc-500 text-base md:text-xl font-medium mb-12 text-center max-w-xl">
        A dedicated software engineering team building next-generation digital products and autonomous systems.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Card 1 */}
        <div className="glass-card p-8 rounded-2xl flex flex-col hover:-translate-y-1.5 transition-transform duration-300">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white mb-6 flex items-center justify-center font-bold text-sm shadow-md font-display">
            01
          </div>
          <h3 className="font-display text-xl font-bold mb-3 text-zinc-900">
            Core Philosophy
          </h3>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed flex-grow">
            We are a dedicated software engineering team driven by a commitment to ship ambitious, well-crafted software. We bridge the gap between stunning visual interfaces and robust operational backend systems, building cohesive solutions that help businesses scale faster and operate with absolute precision.
          </p>
        </div>

        {/* Card 2 */}
        <div className="glass-card p-8 rounded-2xl flex flex-col hover:-translate-y-1.5 transition-transform duration-300">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white mb-6 flex items-center justify-center font-bold text-sm shadow-md font-display">
            02
          </div>
          <h3 className="font-display text-xl font-bold mb-3 text-zinc-900">
            Digital Architecture
          </h3>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed flex-grow">
            We do not simply build websites; we engineer high-performance web applications. By structuring modern, scalable tech stacks, we construct responsive, dynamic environments that deliver exceptional user experiences and flawless functionality from the very first click.
          </p>
        </div>

        {/* Card 3 */}
        <div className="glass-card p-8 rounded-2xl flex flex-col hover:-translate-y-1.5 transition-transform duration-300">
          <div className="w-10 h-10 rounded-xl bg-teal-600 text-white mb-6 flex items-center justify-center font-bold text-sm shadow-md font-display">
            03
          </div>
          <h3 className="font-display text-xl font-bold mb-3 text-zinc-900">
            System Orchestration
          </h3>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed flex-grow">
            Time is your most valuable asset. We design custom, interconnected automation workflows and integrate agentic AI systems to eliminate repetitive manual tasks. By orchestrating seamless data flow, we unlock unprecedented levels of efficiency for your daily operations.
          </p>
        </div>
      </div>
    </section>
  );
}
