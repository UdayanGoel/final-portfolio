import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { AboutEducation } from './components/AboutEducation';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function PortfolioContent() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExplore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="main-page-wrapper bg-[var(--bg-page)] text-[var(--text-page)] min-h-screen relative w-full transition-colors duration-300"
      style={{ overflowX: 'clip', fontFamily: "var(--font-body)" }}
    >
      {/* Scroll-driven Top Progress Bar */}
      <ScrollProgress />

      {/* Top Navbar */}
      <Navbar onContactClick={handleScrollToContact} onExploreClick={handleExplore} />

      {/* 1. Hero Section */}
      <Hero onContactClick={handleScrollToContact} onExploreClick={handleExplore} />

      {/* 2. Marquee Section */}
      <Marquee />

      {/* 3. About & Education Section */}
      <AboutEducation />

      {/* 4. Skills Section */}
      <Skills />

      {/* 5. Projects Showcase Section */}
      <Projects />

      {/* 6. Testimonials Section */}
      <Testimonials />

      {/* 7. Contact Section & Footer */}
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
