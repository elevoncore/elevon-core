import BackgroundRibbons from '@/components/BackgroundRibbons';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Accessible Skip Link */}
      <a 
        href="#home" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-zinc-950 focus:text-white focus:rounded-full focus:shadow-2xl focus:ring-2 focus:ring-indigo-400 text-sm font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main className="relative min-h-screen overflow-x-clip flex flex-col items-center w-full">
        <BackgroundRibbons />
        <Hero />
        <About />
        <Team />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
