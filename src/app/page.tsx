"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Resources } from "@/components/Resources";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Home() {
  const { activeIndex, scrollToSection, containerRef } = useActiveSection();

  return (
    <ThemeProvider>
      <Navigation activeIndex={activeIndex} onNavigate={scrollToSection} />
      <main ref={containerRef} className="snap-container">
        <Hero onNavigate={scrollToSection} />
        <About />
        <Resources />
        <Gallery />
        <Contact />
      </main>
    </ThemeProvider>
  );
}
