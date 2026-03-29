import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="relative flex-1 overflow-x-hidden w-full">
        <Hero />
        <About />
        <Skills />
        <Services />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
