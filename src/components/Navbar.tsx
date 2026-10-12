import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onExploreClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onExploreClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['contact', 'testimonials', 'projects', 'skills', 'about'];
      const scrollY = window.scrollY;

      if (scrollY < 200) {
        setActiveLink('Home');
        return;
      }

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          if (scrollY >= top) {
            if (id === 'contact') setActiveLink('Reach Us');
            else if (id === 'testimonials') setActiveLink('Reviews');
            else if (id === 'projects') setActiveLink('Studio');
            else if (id === 'skills') setActiveLink('Journal');
            else if (id === 'about') setActiveLink('About');
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Studio', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Journal', href: '#skills' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Reach Us', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    e.preventDefault();
    setActiveLink(name);
    setMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '#contact') {
      onContactClick();
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCtaClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        onContactClick();
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[hsl(201,100%,10%)]/80 backdrop-blur-md border-b border-border shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="relative z-10 flex row items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo in Instrument Serif */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-2xl sm:text-3xl tracking-tight text-foreground transition-opacity hover:opacity-90 inline-flex items-baseline gap-1 cursor-pointer"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          <span>Udayan Goel</span>
          <sup className="text-xs text-muted-foreground font-mono">®</sup>
        </a>

        {/* Nav Links (hidden on mobile, md:flex) */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeLink === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.name, item.href)}
                className={`text-sm transition-colors cursor-pointer ${
                  isActive
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button: Begin Journey with liquid-glass */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCtaClick}
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
          >
            <span>Begin Journey</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[hsl(201,100%,10%)]/95 backdrop-blur-xl border-b border-border px-8 py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.name, item.href)}
                className={`text-base font-medium py-2 border-b border-white/5 transition-colors ${
                  activeLink === item.name
                    ? 'text-foreground font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="liquid-glass rounded-full w-full mt-4 py-3 text-sm text-foreground hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Begin Journey</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
