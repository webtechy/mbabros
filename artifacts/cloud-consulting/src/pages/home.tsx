import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import TechStack from '@/components/sections/TechStack';
import ValueProp from '@/components/sections/ValueProp';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProp />
        <Services />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
