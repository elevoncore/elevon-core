export default function Company() {
  return (
    <section id="company" className="snap-start w-full max-w-6xl z-10 px-4 py-12 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight text-center text-[var(--text-main)]">
        Elevon Core <br />
        <span className="text-[var(--text-muted)] text-2xl md:text-4xl">Mission & Vision</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Card 1 */}
        <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mb-6 flex items-center justify-center text-white font-bold">1</div>
          <h3 className="text-xl font-medium mb-3 text-[var(--text-main)]">Core Philosophy</h3>
          <p className="text-[var(--text-muted)] text-base leading-loose">
            We are a dedicated engineering team driven by a commitment to ship ambitious, well-crafted software. We bridge the gap between stunning visual interfaces and robust operational backend systems, building cohesive solutions that help businesses scale faster and operate with absolute precision.
          </p>
        </div>

        {/* Card 2 */}
        <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 mb-6 flex items-center justify-center text-white font-bold">2</div>
          <h3 className="text-xl font-medium mb-3 text-[var(--text-main)]">Digital Architecture</h3>
          <p className="text-[var(--text-muted)] text-base leading-loose">
            We do not simply build websites; we engineer high-performance web applications. By structuring modern, scalable tech stacks, we construct responsive, dynamic environments that deliver exceptional user experiences and flawless functionality from the very first click.
          </p>
        </div>

        {/* Card 3 */}
        <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 mb-6 flex items-center justify-center text-white font-bold">3</div>
          <h3 className="text-xl font-medium mb-3 text-[var(--text-main)]">System Orchestration</h3>
          <p className="text-[var(--text-muted)] text-base leading-loose">
            Time is your most valuable asset. We design custom, interconnected automation workflows and integrate agentic AI systems to eliminate repetitive manual tasks. By orchestrating seamless data flow, we unlock unprecedented levels of efficiency for your daily operations.
          </p>
        </div>
      </div>
    </section>
  );
}
