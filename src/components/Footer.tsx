import React from 'react';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, Sparkles, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SocialLink {
  name: string;
  category: string;
  handle: string;
  url: string;
  icon: React.ReactNode;
  accent: string;
}

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials: SocialLink[] = [
    {
      name: 'X (Twitter)',
      category: 'Tech Thoughts & AI',
      handle: '@udayan_goel',
      url: 'https://x.com',
      accent: 'hover:border-sky-500/40 hover:text-sky-300',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Discord',
      category: 'Dev Community & Chats',
      handle: 'udayan.dev',
      url: 'https://discord.com',
      accent: 'hover:border-indigo-500/40 hover:text-indigo-300',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      category: 'Professional Network',
      handle: 'in/udayan-goel',
      url: 'https://www.linkedin.com/in/udayan-goel-ab102a403',
      accent: 'hover:border-[#0077B5]/50 hover:text-sky-400',
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      name: 'GitHub',
      category: 'Open Source & Repos',
      handle: 'github.com/udayan',
      url: 'https://github.com',
      accent: 'hover:border-cyan-500/50 hover:text-cyan-300',
      icon: <Github className="w-4 h-4" />,
    },
    {
      name: 'Direct Email',
      category: 'Fast Inquiries & Notes',
      handle: 'goeludayan@gmail.com',
      url: 'mailto:goeludayan@gmail.com',
      accent: 'hover:border-emerald-500/50 hover:text-emerald-400',
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  return (
    <footer
      className={`w-full pt-16 pb-12 px-6 sm:px-12 md:px-16 select-none border-t transition-colors duration-300 ${
        isDark
          ? 'bg-[hsl(201,100%,8%)] border-border text-[#D7E2EA]'
          : 'bg-[#F1F3F5] border-black/5 text-slate-700'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Upper Footer Grid: Brand Overview & Dedicated Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Brand & Mission column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UDAYAN GOEL · PORTFOLIO</span>
            </div>

            <div
              className={`text-3xl font-normal tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Udayan Goel
            </div>

            <p
              className={`text-xs sm:text-sm font-light leading-relaxed max-w-sm ${
                isDark ? 'text-muted-foreground' : 'text-slate-600'
              }`}
            >
              1st Year B.Tech Computer Science & Engineering student at JECRC University, exploring
              artificial intelligence, computer vision applications, and high-performance modern web engineering.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span
                className={`text-xs font-mono tracking-wide ${
                  isDark ? 'text-[#D7E2EA]' : 'text-slate-700'
                }`}
              >
                Open for AI Research & Software Internships
              </span>
            </div>
          </div>

          {/* Dedicated Socials Column */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
              <span
                className={`text-xs font-mono uppercase tracking-widest ${
                  isDark ? 'text-muted-foreground' : 'text-slate-500'
                }`}
              >
                SOCIALS & PROFESSIONAL CHANNELS
              </span>
              <span
                className={`text-[11px] font-mono ${
                  isDark ? 'text-muted-foreground' : 'text-slate-400'
                }`}
              >
                CONNECT ACROSS PLATFORMS
              </span>
            </div>

            {/* Social Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`group p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-28 relative overflow-hidden ${
                    social.accent
                  } ${
                    isDark
                      ? 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                      : 'bg-white border-black/5 hover:bg-slate-50 hover:border-black/15 shadow-sm hover:shadow'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isDark ? 'bg-white/5 text-white' : 'bg-black/5 text-slate-800'
                      }`}
                    >
                      {social.icon}
                    </div>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isDark ? 'text-muted-foreground group-hover:text-white' : 'text-slate-400 group-hover:text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <div
                      className={`text-xs font-bold tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {social.name}
                    </div>
                    <div
                      className={`text-[11px] font-mono truncate ${
                        isDark ? 'text-muted-foreground' : 'text-slate-500'
                      }`}
                    >
                      {social.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Footer: Copyright, Location & Scroll To Top */}
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
            isDark ? 'border-white/10 text-muted-foreground' : 'border-black/10 text-slate-500'
          }`}
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-cyan-300" />
            <span>Jaipur, Rajasthan, India</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} Udayan Goel</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Designed & Built with modern React & Tailwind</span>

            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-full border transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95 ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
                  : 'bg-black/5 border-black/10 hover:bg-black/10 text-slate-700 hover:text-slate-900'
              }`}
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
