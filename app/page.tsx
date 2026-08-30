import BackgroundRibbons from '@/components/BackgroundRibbons';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Team from '@/components/Team';
import Company from '@/components/Company';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center">
      <BackgroundRibbons />
      <Navbar />
      <Hero />
      <Team />
      <Company />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}