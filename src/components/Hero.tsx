import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreClick }) => {
  const handleBeginJourney = () => {
    if (onExploreClick) {
      onExploreClick();
      return;
    }
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      onContactClick();
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 py-[90px] overflow-hidden select-none">
      {/* Fullscreen Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* Hero Content - relative z-10 */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto my-auto">
        {/* Subtle Author / Portfolio Identifier */}
        <div className="flex items-center justify-center gap-2.5 mb-8 animate-fade-rise">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
            PORTFOLIO · UDAYAN GOEL · 2026
          </span>
        </div>

        {/* Cinematic H1 */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground animate-fade-rise"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-muted-foreground">dreams</em> rise{' '}
          <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>

        {/* CTA Button */}
        <div className="animate-fade-rise-delay mt-12 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleBeginJourney}
            className="liquid-glass rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03] cursor-pointer transition-transform duration-300 inline-flex items-center gap-2 group"
          >
            <span>Begin Journey</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-muted-foreground group-hover:text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};
